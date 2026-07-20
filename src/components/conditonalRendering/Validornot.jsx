import React from 'react'
const ValidPassword = ()=><h1>Valid Password</h1>
const InvalidPassword = ()=><h1>Invalid Password</h1>
const Password = ({isvalid})=>{
// if(isvalid){
//     return <ValidPassword />
// }
// return <InvalidPassword />

//Ternary operator
return  isvalid ? <ValidPassword />:<InvalidPassword />
}
const Validornot = () => {
  return (
    <div>
      <Password  isvalid ={false}/>
    </div>
  )
}

export default Validornot
