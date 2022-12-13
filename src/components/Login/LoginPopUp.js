import React, { useEffect, useState } from 'react'
import './loginPopUp.scss'
import foxImg from'../../assets/MetaMask_Fox.svg.png'
import Web3 from 'web3';
import { ethers } from 'ethers';
import LogedIn from './LogedIn';



function LoginPopUp({openModal, setModal}) {
  const closeModal = () => {
    setModal(!openModal)
  }

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);
  const [isLogedIn, setisLogedIn] = useState(false);
  

	const connectWalletHandler = () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			setProvider(new ethers.providers.Web3Provider(window.ethereum));

			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				setConnButtonText('Wallet Connected');
				setDefaultAccount(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

  useEffect(() => {
    if(defaultAccount){
    provider.getBalance(defaultAccount)
    .then(balanceResult => {
      setUserBalance(ethers.utils.formatEther(balanceResult));
    })
    };
  }, [defaultAccount]);

  


  return (
    <div className='modBackDrop' onClick={closeModal}>
      
      <div onClick={e => {e.stopPropagation()}} className={openModal ? 'loginOpen': 'loginClose'}>
        <button className='btnC' onClick={closeModal}>X</button>
        <div className={!isLogedIn === true ? 'display': 'dontDisplay' }>
        <h1>Login</h1>
        <img src={foxImg} alt='Meta_Mask_Logo'/>
        <p>Using MetaMask</p>
        <button onClick={e => {connectWalletHandler(); setisLogedIn(true)}} className='btnL'>Connect Wallet</button>
        </div>
        
        
        <div className={isLogedIn === true ? 'display': 'dontDisplay' }>
        <LogedIn userAddress={defaultAccount} userBalance={userBalance} />
        </div>
        
      </div>
    </div>
    
  )
}

export default LoginPopUp
