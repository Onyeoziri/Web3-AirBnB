import { React, useState, useEffect, useRef } from 'react'
import * as userService from '../../core/userService';
import { handleEvent } from '../../core/handleEvent';

function Login(props) {
  const username = useRef();
  const password = useRef(); 

  const [user, changeUser] = useState();

  const login = async () => {
    await userService.login(username.current.value, password.current.value);
    changeUser({...userService.user});
  }

  return (
    <>
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
          <input type="input" ref={username}/> <label>username</label>
          <input type="password" ref={password}/> <label>password</label>
          <button onClick={(e) => {
            handleEvent(e);
            login();
          }}>
            Login
          </button>
        </form>}
    </>
  )
}

export default Login
