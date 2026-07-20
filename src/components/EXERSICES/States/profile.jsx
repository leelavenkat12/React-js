import React, { useState } from 'react'

const profile = () => {

    const [profile,setprofile] = useState({
        name:"",
        age:"",
    });

  return (
    <div>
    <h2>User profile</h2>
    <div>
        <label >Name: 
            <input type="text" name='name' value={profile.name} onChange={handlechange} />
        </label>
    </div>
    <div>
        Age:
        <input type="number" name="age" value={profile.age} onChange={handlechange }  />
    </div>
    </div>
  )
}

export default profile
