import React, { useState } from 'react'
import closeMenu from '../../assets/NavBar/closeMenu.svg'
import globeIcon from '../../assets/NavBar/globe.svg'
import LogoPlaceHolder from '../../assets/NavBar/logoPlaceHolder.svg'
import MenuBar from '../../assets/NavBar/menuBar.svg'
import ProfileIcon from '../../assets/NavBar/profileIcon.svg'
import menuMotion from '../../assets/NavBar/menuMotion.svg'
import './NavBar.scss'
import {LoginPopUp} from '../../components'

function NavBar(isLogedIn) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const toggleLogin = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <nav>
        <a href='/'><img className='logo' src={LogoPlaceHolder} alt='Logo'/> <h2 className='LogoText'>AirBn3</h2> </a>

        <div>
          <ul className={!navbarOpen ?'navOptions': 'navMobileOptions'}>
            <li> <button className='button1' onClick={navbarOpen && handleToggle}>
              Become a Host</button> </li>
              
            <li> <button className={isLogedIn === false ? 'button1 toLogInfo': 'button1 toSignOut'} onClick={() => {(navbarOpen && handleToggle()); toggleLogin(<LoginPopUp openModal='open'/>)}}>
              Login</button> </li>
            <li> <button className={'button1'} onClick={navbarOpen && handleToggle}>
              SignUp</button> </li>
            <li> <button className='button1' onClick={navbarOpen && handleToggle}><img src={globeIcon} alt='Globe_Icon'/>  
            English</button> </li>

            <li className='profileMenu'> <button className='button2'> 
            <img src={MenuBar} alt='Menu'/>
            <img src={ProfileIcon} alt='profile_image'/>
            </button> </li>
          </ul>
        </div>

        <div id='mobile'>
          <button className='button2' onClick={handleToggle}>
            {navbarOpen ? <img className='icon' src={closeMenu} alt='Close_Menu'/>: <img className='icon' src={MenuBar} alt='Menu'/>}
          </button>
        </div>

        {openModal && <LoginPopUp openModal={openModal} setModal={setOpenModal}/>}

      </nav>
    </div>
  )
}

export default NavBar
