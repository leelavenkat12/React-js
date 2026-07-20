import React, { useState } from 'react'
const StateObj = () => {
    const [movie,setmovie]= useState({
        title:'Equalizer 3',
        ratings:7
    });
  return (
    <section>
<h1>Title:{movie.title}</h1>
<p>Ratings:{movie.ratings}</p>
<button onClick={()=>setmovie({...movie,ratings:9})}>Change Ratings</button>
    </section>
  )
}

export default StateObj
