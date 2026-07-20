import React, { useState } from 'react'

const Counter = () => {
    const[counting,setcounting] = useState(0);
  return (
    <div>
        <h1>counting:{counting}</h1>
      <button onClick={()=>setcounting(counting+1)}>Increment</button>
    </div>
  )
}

export default Counter
