import React from 'react'
import './loginPopUp.scss'
import foxImg from'../../assets/MetaMask_Fox.svg.png'
import foxImg2 from '../../assets/metamask.gif'
import Web3 from 'web3';



function LoginPopUp({openModal, setModal}) {
  const closeModal = () => {
    setModal(!openModal)
  }

  const web3 = new Web3(window.ethereum);
  const accounts = web3.eth.getAccounts();
  const userAddress = accounts[0];
  
  const loginMetamask = () => {
    if ((window.ethereum)) {
      
      
    }
  }

  return (
    <div className='modBackDrop' onClick={closeModal}>
      <div onClick={e => {e.stopPropagation()}} className={openModal ? 'loginOpen': 'loginClose'}>
      <button className='btnC' onClick={closeModal}>X</button>
      
      <h1>Login</h1>
      <img src={foxImg} alt='Meta_Mask_Logo'></img>
      <p>Using MetaMask</p>
      <button onClick={loginMetamask} className='btnL'>Login</button>

    </div>
    </div>
    
  )
}

export default LoginPopUp
