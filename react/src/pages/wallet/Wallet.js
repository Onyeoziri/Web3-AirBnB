import {React, useState} from 'react'
import axios from 'axios';

function useWallet() {
  const [wallet, setWallet] = useState(null);
  return [
    {
      wallet
    }, 
    async () => {
      const { ethereum } = window;
      setWallet(ethereum);
      if (ethereum) {
        console.log("ETH detected");
      } else {
        console.log("No ETH wallet detected");
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
      } else {
        console.log("No authorized account found")
      }
    }
  ]
}

function Wallet() {
  const [wallet, setWallet] = useWallet();
  async function testBackend() {
    const res = await axios.get('http://localhost:4000')
    console.log(res.data);
  }

  return (
    <>
      <button onClick={(e) => {
          // handleEvent(e);
          testBackend()
      }}>Test Backend</button>
      {!wallet.wallet && (
        <button onClick={setWallet}>
          Connect Wallet
        </button>
      )}
    </>
  )
}

export default Wallet
