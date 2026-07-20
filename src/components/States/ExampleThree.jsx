import React, { useState } from 'react'

const ExampleThree = () => {
  const [name,setname]  = useState(()=>{
    const savedname = localStorage.getItem('name')
    return savedname ?JSON.parse(savedname):"";
    
  }
  );
  return (
    <div>
      <h1>Your Name:{name}</h1>
      <input type="text" name="" id="" placeholder='Enter '/>
    </div>
  )
}

export default ExampleThree
