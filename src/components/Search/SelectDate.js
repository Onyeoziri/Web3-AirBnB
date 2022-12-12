//Note: Calender styled in Home.sccs
import React, { useState } from 'react'
import { addDays, format } from 'date-fns'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../../pages/home/home.scss'

import cal from '../../assets/cal.svg'

function SelectDate() {

    const [dateValue, setDateValue] = useState(' Check-In  >>  Check-Out')
    const [isShowCalendar, setIsShowCalendar] = useState(false);

    const dateformat = ()=>{
      setDateValue(format(state[0].startDate, 'eee, LLL dd')+ '  -  ' + format(state[0].endDate, 'eee, LLL dd'))
    }

    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ])

  return (
    <div className='selectDate'>
       <input
            type="text"
            onClick={()=> setIsShowCalendar(!isShowCalendar)}
            value={dateValue}
        />

      <div className={isShowCalendar ? 'showCalender': 'noCalander'}>

          <DateRangePicker
          onChange={item => {setState([item.selection]); dateformat()}}
          className="my-custom-classname"          
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          />

      </div>

     
    </div>
  )
}

export default SelectDate
