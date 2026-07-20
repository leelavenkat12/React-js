import React from 'react'

const Mapping = () => {
    const Number = [1,2,3,4,5];
  return (
   <main>
    {Number.map(value=>(
        <ul key={value}>
            <li>

                {value}
            </li>
        </ul>
    ))}
   </main>
  )
}

export default Mapping;
