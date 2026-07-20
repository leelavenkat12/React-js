import React from 'react'
const Loggedin =()=><h1>Logged In</h1>
const isAdmin = ()=><h1>isAdmin</h1>
const Check = ({Loggedin,isAdmin})=>{
    if (Loggedin == true && isAdmin == true){
        return <h1>Welcome Admin</h1>
    }
    else if(Loggedin == true && isAdmin == false){
        return <h1>Welcome User</h1>
    }
    else{
        return <h1>Please Loggin First</h1>
    }
}

const UserStatus = () => {
 return  <Check Loggedin={false} isAdmin={true}/>
}

export default UserStatus
