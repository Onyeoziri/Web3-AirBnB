//Note: styled in Home.scss

import React, { useState } from 'react'
import Select from 'react-select'
import { cityData  } from './citydata'
import './dataStyles.scss'

import mag from '../../assets/mag.svg'

function SearchCitys() {

    const [selectedValue, setSelectedValue] = useState("")

    const recordValue = (selected) =>{
        setSelectedValue(selected.value)
    }


  return (
    <div className='search_City'>
        <img src={mag} alt='mag'/>
        <Select 
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder= {'Select City'}
        options={cityData} 
        onChange={recordValue}
        />
      
    </div>
  )
}

export default SearchCitys
