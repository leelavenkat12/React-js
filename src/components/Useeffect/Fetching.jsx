import React, { useEffect, useState } from 'react'

const Fetching = () => {
    const [data,setdata] = useState([]);
useEffect(()=>{
     async function Getdata() {
       const responce =  await fetch("https://jsonplaceholder.typicode.com/posts")
       const data = await responce.json()
       if(data && data.length){
        setdata(data)
       }
      }

      Getdata();
},[])
  return (
    <div>
        <ul>
            {data.map(todo =>(
                <section key={todo.id}>
                <li>{todo.title}</li>
                <li> Body -----{todo.body}</li>
                </section>
            ))}
        </ul>

    </div>
  )
}

export default Fetching
