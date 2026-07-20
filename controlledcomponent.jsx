import { useState } from "react";

function Sol(){
    const [name,setname]=useState("")
     const [Pass,setpass]=useState("")
      const [email,setemail]=useState("")

    return(
        <div>
        <h1>Controlled Component</h1>
        <form action="">
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name"/>
            <br /> <br />
            <input type="text" value={Pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password"/>
            <br /> <br />

            <input type="text"  value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Enter Email"/>
            <br /> <br />
            <button>Submit</button>
            <button onClick={()=>{setname(""),setemail(""),setpass("")}}>Clear</button>
            <h1>{name}</h1>
            <h2>{Pass}</h2>
            <h3>{email}</h3>

        </form>
        </div>
    )
}
export default Sol;