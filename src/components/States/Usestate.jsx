import { useState } from 'react'
import React from 'react'

const Usestate = () => {
    const [counter,setcounter] = useState(0)
    const increment =()=>setcounter(counter+1)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Usestate
