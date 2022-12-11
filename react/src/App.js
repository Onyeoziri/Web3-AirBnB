import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import axios from "axios";

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

function App() {
  const [user, changeUser] = useState();
  const [wallet, setWallet] = useWallet();

  const username = useRef();
  const password = useRef();

  async function login(username, password) {
    const res = await axios.post('http://localhost:4000/login', {
      user: username,
      pass: password
    })
    console.log(res.data);
    changeUser(res.data)
  }

  async function testBackend() {
    const res = await axios.get('http://localhost:4000')
    console.log(res.data);
  }

  function handleEvent(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!user && (
          <form>
            <input type="input" ref={username}/> <label>username</label>
            <input type="input" ref={password}/> <label>password</label>
            <button onClick={(e) => {
              handleEvent(e);
              login(username.current.value, password.current.value);
            }}>
              Login
            </button>
          </form>
          
        )}
        <button onClick={(e) => {
          handleEvent(e);
          testBackend()
        }}>Test Backend</button>
        {!wallet.wallet && (
          <button onClick={setWallet}>
            Connect Wallet
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
