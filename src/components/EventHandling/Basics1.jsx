import React from 'react'
const Button = ()=>{
    return <button onClick={()=>console.log(Math.round(Math.random()*10))}>Click</button>;
};


const Basics1 = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default Basics1
