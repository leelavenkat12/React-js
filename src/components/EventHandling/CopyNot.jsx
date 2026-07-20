import React from 'react'
const Copy =()=>{
    const copyHandler = ()=>{
        console.log("DONT CHEAT")
    }
    return (
        <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Debitis laborum ut sapiente quidem eveniet beatae facilis velit saepe. Amet, odit?</p>
    )
}
const CopyNot = () => {
  return (
    <div>
      <Copy />
    </div>
  )
}

export default CopyNot
