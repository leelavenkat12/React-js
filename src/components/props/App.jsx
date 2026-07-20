import React from 'react'
const App=()=>{
return <Basic  name = "Leela Venkat" 
age={19} 
isMarried={false}
 hobbies={['Coding','Reading','Sleeping']}
 />
}
//Destructering the props

const Basic = ({name,age,isMarried,hobbies}) => {
  return (
    <section>
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h3>Is Married:{isMarried}</h3>
        <h4>Hobbies:{hobbies}</h4>
    </section>
  )
}

export default App;
