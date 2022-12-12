import React, { useState } from 'react'
import './home.scss'
import hero1 from '../../assets/Home/hero1.svg'
import {GuessCount, SearchCitys, SelectDate} from '../../components/index'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Home() {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const [isOpen, setIsOpen] = useState(false)

  const openDate = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    <div className='home'>

      {/* Hero Section */}
      <div className='hero'>
        <img src={hero1} alt='hero_Image'/>
        <h1>Powered By Solidity</h1>
      </div>

      {/* Search Bar */}
      
      <div className='search_Hero'>
        <ul>
          <li><SearchCitys /></li>
          <span>|</span>
          <li><SelectDate /></li>
          <span>|</span>
          <li><GuessCount /></li>

          <button className='btn2'>Search</button>
        </ul>
      </div>

      <div className='content'>
          <h1> A world of choice </h1>
          <p>Find the right place for you!</p>

          <h2>.... Login to view our hostings ....</h2>

      </div>


      
    </div>
  )
}

export default Home
