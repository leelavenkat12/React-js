import React, { useState } from 'react'

const ExampleofState = () => {
    const[randomnumber,setrandomnumber]=useState(()=>Math.floor(Math.random()*100))
  return (
    <div>
     <h1>randomNumber:{randomnumber}</h1>
     <button onClick={()=>setrandomnumber(Math.floor(Math.random()*100))}>Genratenewnumber</button>
    </div>
  )
}

export default ExampleofState
