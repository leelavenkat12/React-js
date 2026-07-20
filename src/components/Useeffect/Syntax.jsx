import React, { useEffect, useState } from 'react'

const Syntax = () => {
    const [value , setvalue] = useState(0);
    useEffect(()=>{
        if(value >0){
        console.log('call Effected')
        document.title  =  `increment ${value}`
        }
    },[value])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setvalue(value+1)}>Click Me</button>
    </div>
  )
}

export default Syntax
