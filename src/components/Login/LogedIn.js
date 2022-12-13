import React from 'react'
import './loginPopUp.scss'
import foxImg2 from '../../assets/metamask.gif'

function LogedIn(props) {
  return (
    <div>
      
      <h1>Welcome</h1>
      <img src={foxImg2} className='img2' alt='Meta_Mask_Logo2'/>
      <p>Name: --- </p>
      <p>Address: {props.userAddress}</p>
      <p>Balance: {props.userBalance}eth</p>
      <button className='btnL'>Continue</button>
      
    </div>
  )
}

export default LogedIn
