import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [ Fetching , SetFetching]  = useState([]);
    useEffect(()=>{
        async function GetData() {
              const data = await fetch("https://jsonplaceholder.typicode.com/posts")
              const response = await data.json();
              if(Fetching && SetFetching.length){
                SetFetching(response)
              }
            
        }
        GetData();
    },[])
  return (
    <div>
     <ul><h1>Data :</h1>
        {Fetching.map(posts =>(
                <li key={posts.id}>
                    {posts.body} </li>
         
        ))}
     </ul>
    </div>
  )
}

export default FetchDataEffect
