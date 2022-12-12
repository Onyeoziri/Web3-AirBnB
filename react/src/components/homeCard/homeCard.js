import React from 'react'
import home from './home.jpeg';
import './homeCard.css';
import * as userService from '../../core/userService'

function HomeCard(props) {
  function getButton() {
    if (props.reserved) {
      if(props.owner === userService.user) {
        return <button>Unreserve</button>
      }
    } else {
      return <button>Reserve</button>
    }
    
  }
  return (
    <div className='card'>
      <img src={home} alt='house' width="200" height="120"/>
      <p className='text'>Name: {props.name}</p>
      <p className='text'>Location: {props.location}</p>
      <p className='text'>Cost: {props.cost}</p>
      <p className='text'>Owner: {props.owner}</p>
      {props.reserved ? <p className='text'>Reserved: {props.reserved}</p> : <p className='text'>Not reserved yet...</p>}
      {getButton()}
    </div>
  )
}

export default HomeCard