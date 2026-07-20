import React from 'react'

const Person = () => {
  return (
   <Render1 
   name = "leela venkat"
   age = {19}
   />
  )
}
const Render1 = (props)=>{
  return (
  <section>
<h2>Name:{props.name}</h2>
<p>Age:{props.age}</p>
  </section>
  )
}

export default Person
