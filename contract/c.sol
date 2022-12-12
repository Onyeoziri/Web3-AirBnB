pragma solidity 0.8.17;

contract AirBnB {
  address payable public owner;
  
  struct Reservation {
    bool exists;
    string owner;
    string requester;
  }

  mapping (uint => Reservation) reservations;

  constructor() {
    owner = payable(msg.sender);
  }

  function viewReservation(uint id) public view returns (Reservation memory res){
    require(reservations[id].exists == true, "This reservation does not exist.");

    return reservations[id];
  }

  function reserve(uint id, string memory homeOwner, string memory requester) public payable {
    require(reservations[id].exists != true, "It has already been reserved!");

    reservations[id] = Reservation(true, homeOwner, requester);
  }

  function unreserve(uint id) public {
    require(reservations[id].exists == true, "Cannot unreserve a home that hasn't already been reserved.");

    reservations[id] = Reservation(false, '', '');
  }
}