import React, { useState } from 'react'

const Todolsit = () => {
  const [ todos,setTodos] = useState([]);
  const [inputval,setinputval] = useState("");
  const hadnlesubmit = (e) =>{
    e.preventDefault()
    if(inputval.trim()){
      setTodos([...todos,inputval])
      setinputval("");
    }
  }
  const handlechange = (e) =>{
    setinputval(e.target.value);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={hadnlesubmit}>
        <input type="text" value={inputval} onChange={handlechange} placeholder='Add new Todo-List' />
        <button type='submit'>Add Todo</button>
      </form>


      {/* // to list all todos to rendor it */}
      <ul>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
      </ul>
    </div>
  )
}

export default Todolsit
