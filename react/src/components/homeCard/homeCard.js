import React from 'react'
import home from './home.jpeg';
import './homeCard.css';
import * as userService from '../../core/userService'
import abi from '../../assets/AirBnB.json';
import { ethers } from 'ethers';
import axios from 'axios';
import { handleEvent } from '../../core/handleEvent';

const contractAddress = '0xbeA019ead47a7B247E3d3A7888B4bE7fe678b205';
const contractABI = abi.abi;

function getContract() {
  const { ethereum } = window;
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    throw new Error("Error in getting the contract!");
  }
}

async function reserve(id, homeOwner, requester) {
  try {
    const careerContract = getContract();

    try {
      await careerContract.reserve(id, homeOwner, requester);
      await axios.patch('http://localhost:4000/home', {
        id: id,
        reserved: requester
      })
      console.log("Success! You have reserved.");
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    if(error.message === "Error in getting the contract!") {
      console.log("Error caught in getting contract");
    }
  }
}

async function unreserve(id) {
  try {
    const careerContract = getContract();

    try {
      await careerContract.unreserve(id);
      await axios.patch('http://localhost:4000/home', {
        id: id,
        reserved: ''
      })
      console.log("Success! You have reserved.");
    } catch (error) {
      console.log("Cannot reserve.");
    }
  } catch (error) {
    if(error.message === "Error in getting the contract!") {
      console.log("Error caught in getting contract");
    }
  }
}

function HomeCard(props) {
  function getButton(id, owner, requester) {
    console.log(id, owner, requester);
    if (props.home.reserved) {
      if(props.home.user === userService.user.user) {
        return <button onClick={(e) => {
          handleEvent(e);
          unreserve(id);
        }}>Unreserve</button>
      }
    } else {
      return <button onClick={(e) => {
        handleEvent(e);
        reserve(id, owner, requester);
      }}>Reserve</button>
    }
    
  }
  return (
    <div className='card'>
      <img src={home} alt='house' width="200" height="120"/>
      <p className='text'>Name: {props.home.name}</p>
      <p className='text'>Location: {props.home.location}</p>
      <p className='text'>Cost: {props.home.cost}</p>
      <p className='text'>Owner: {props.home.user}</p>
      {props.home.reserved ? <p className='text'>Reserved: {props.home.reserved}</p> : <p className='text'>Not reserved yet...</p>}
      {getButton(props.home.id, props.home.user, userService.user.user )}
    </div>
  )
}

export default HomeCard