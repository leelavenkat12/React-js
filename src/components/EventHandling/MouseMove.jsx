import React from 'react'
const Move=()=>{
    return (
        <p onMouseMove={()=>{
            alert("Mouse moved ur alert")
            console.log("YOUR FIRED");
        }
    
        
        }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum 
            omnis libero deserunt saepe, asperiores iusto nostrum commodi veritatis iure!</p>
    );
};


const MouseMove = () => {
  return (
    <div>
      <Move />
    </div>
  )
}

export default MouseMove
