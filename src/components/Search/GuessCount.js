import React, { useState } from 'react'
import './dataStyles.scss'
import pro from '../../assets/pro.svg'

function GuessCount() {
    const [count, setCount] = useState(0)



  return (
    <div className='GuessCounter'>
      <img src={pro} alt='guess'/>
        <p>  Guest </p>
      
      <button className='btnG' onClick={() => (count > 0 )&& setCount(count - 1)}>
        -
      </button>
      <p>{count}</p>
      
      <button className='btnG' onClick={() => (count < 10 ) && setCount(count + 1)}>
        +
      </button>
      
    </div>
  )
}

export default GuessCount
