import {React, useState, useRef} from 'react'
import axios from 'axios';
import * as userService from '../../core/userService'
import { handleEvent } from '../../core/handleEvent';

function House() {
  const [homes, viewHomes] = useState();

  const houseName = useRef();
  const houseLocation = useRef();
  const houseCost = useRef();

  const userFilter = useRef();
  const reservedFilter = useRef();

  const user = userService.user;

  async function addHouse(name, loc, cost) {
    const res = await axios.post('http://localhost:4000/home', {
      // user: user.user,
      name: name,
      location: loc,
      cost: cost
    })
    console.log(res.data);
  }

  async function getHomes(userHomes, reservedHomes) {
    const res = await axios.get(`http://localhost:4000/home?userFilter=${userHomes ? user.user : ''}&reservedFilter=${reservedHomes}`)
    viewHomes(res.data)
  }

  return (
    <>
      {user ? 
        <div>
          <form>
          <label>
            Name
            <input type="input" ref={houseName} />
          </label>
          <label>
            Location
            <input type="input" ref={houseLocation} />
          </label>
          <label>
            Cost
            <input type="input" ref={houseCost} />
          </label>
          <button onClick={(e) => {
            handleEvent(e)
            addHouse(houseName.current.value, houseLocation.current.value, houseCost.current.value)
          }}>Add House</button>
        </form>
        {!homes && (<p>No homes detected here...</p>)}
        {homes && (
          homes.map(home => {
            return <div>
              <p>{home.name}</p>
              <p>{home.location}</p>
              <p>{home.cost}</p>
            </div>
          })
        )}
        <label>Your Homes</label> <input type="checkbox" ref={userFilter} />
        <label>Reserved Homes</label> <input type="checkbox" ref={reservedFilter} />
        <button onClick={(e) => {
          handleEvent(e)
          getHomes(userFilter.current.checked, reservedFilter.current.checked)
        }}>Get Homes</button>
        </div>
         : 
        <p>No user detected...</p>
        }
      
    </>
  )
}

export default House

