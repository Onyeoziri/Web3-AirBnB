pragma solidity 0.8.17;

contract AirBnB {
  address owner;

  enum PropertyType { APARTMENT, HOUSE, SECONDARY, UNIQUE, OTHER }
  enum SpaceType { ALL, PRIVATE, SHARED } // entire place, private room, shared room

  struct Request {
    address requester;
    bool exists;
  }

  struct Home {
    address userAddress;
    Request request;
    string name;
    bool exists;
    PropertyType propertyType;
    SpaceType spaceType;
    string LocationAddress;
  }

  struct User {
    bool registered;
    uint numHomes;
    address userAddress;
  }

  User[] registeredUsers;
  Home[] homes;

  constructor() {
    owner = msg.sender;
    registeredUsers.push(User({registered: true, numHomes: 0, userAddress: msg.sender}));
  }

  function findUser(address user) private view returns (User memory) {
    for(uint i = 0; i < registeredUsers.length; i++) {
      if(registeredUsers[i].userAddress == user) {
        return registeredUsers[i];
      }
    }

    revert("User not found");
  }

  function findHome(address userAddress, string calldata name) private view returns (Home memory) {
    for(uint i = 0; i < homes.length; i++) {
      if(homes[i].userAddress == userAddress && keccak256(abi.encodePacked(homes[i].name)) == keccak256(abi.encodePacked(name))) {
        return homes[i];
      }
    }

    revert("Home not found");
  }

  function findHomeByUser(address user) private view returns (Home memory) {
    for(uint i = 0; i < homes.length; i++) {
      if(homes[i].userAddress == user) {
        return homes[i];
      }
    }

    revert("Home not found");
  }

  function login(address user) public view returns (User memory) {
    return findUser(user);
  }

  function register(address user) public returns (User memory) {
    require(findUser(user).registered != true, "You have already registered!");

    registeredUsers.push(User(true, 0, user));
    return findUser(user);
  }

  function addHome(address userAddress, string calldata name, PropertyType propType, SpaceType spaceType, string calldata location) public returns (Home memory) {
    require(findHomeByUser(userAddress).exists != true, "You already have a home!");
    require(findHome(userAddress, name).exists != true, "This home already exists!");
    Request memory request;
    Home memory home = Home(userAddress, request, name, true, propType, spaceType, location);

    homes.push(home);

    return home;
  }

  function viewHomes() public view returns (Home[] memory) {
    return homes;
  }

  function requestHome(address requester, address lender, string calldata name) public view {
    Home memory requestedHome = findHome(lender, name);
    require(findUser(requester).registered == true, "You must be registered in order to request homes.");
    require(requestedHome.exists == true, "You must select a home that exists in our database.");
    require(requestedHome.request.exists != true, "This home has already been requested.");

    requestedHome.request.requester = requester;
  }
}