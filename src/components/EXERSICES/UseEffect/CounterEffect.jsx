import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [ Count , Setcount] = useState(0);
    useEffect(()=>{
        console.log(`useEffect called ${Count}`);
        
        document.title  = `Increment ${Count}`
    },[Count])
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>Setcount(Count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect
