import React from 'react'
import './loginPopUp.scss'
import foxImg from'../../assets/MetaMask_Fox.svg.png'
import foxImg2 from '../../assets/metamask.gif'

function LoginPopUp({openModal, setModal}) {
  const closeModal = () => {
    setModal(!openModal)
  }

  return (
    <div className='modBackDrop' onClick={closeModal}>
      <div onClick={e => {e.stopPropagation()}} className={openModal ? 'loginOpen': 'loginClose'}>
      <button className='btnC' onClick={closeModal}>X</button>
      
      <h1>Login</h1>
      <img src={foxImg} alt='Meta_Mask_Logo'></img>
      <p>Using MetaMask</p>
      <button className='btnL'>Login</button>

    </div>
    </div>
    
  )
}

export default LoginPopUp
