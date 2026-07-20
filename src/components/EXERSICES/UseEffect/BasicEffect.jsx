import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [ changes , Setchanges] = useState(0)
    useEffect(()=>{
        console.log(`Mounts when useEffect runs${changes}`);
    })
  return (
    <div>
        <h1>{changes}</h1>
        <button onClick={()=>Setchanges(changes+1)}>Increment</button>
      
    </div>
  )
}

export default BasicEffect
