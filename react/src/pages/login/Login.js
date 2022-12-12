import { React, useState, useRef } from 'react'
import * as userService from '../../core/userService';
import { handleEvent } from '../../core/handleEvent';
import './login.css';

function Login() {
  const username = useRef();
  const password = useRef(); 

  const [user, changeUser] = useState();

  const login = async () => {
    await userService.login(username.current.value, password.current.value);
    changeUser({...userService.user});
  }

  return (
    <div className='login'>
      {user ? 
        <>
          <p>Username: {user.user}</p>
          <button onClick={(e) => {
            handleEvent(e);
            userService.logout();
            changeUser()
          }}>Logout</button>
        </> :
        <form>
          <div className='input'>
            <label>Username:</label> <input type="input" ref={username}/> <br />
          </div>
          <div className='input'>
            <label>Password:</label> <input type="password" ref={password}/> <br />
          </div>
          <button onClick={(e) => {
            handleEvent(e);
            login();
          }}>
            Login
          </button>
        </form>}
    </div>
  )
}

export default Login
