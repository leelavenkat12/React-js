import { useState } from "react";

function Input(){
const [val,setval] = useState("")
    return (
        <div>

<h1>Get Input field</h1>
{/* // as u wnat to get aleert as what ur typing in text filed then use */}
<input type="text"value={val} onChange={(event)=>setval(event.target.value)} name="" id="" placeholder="Enter username" />

<button onClick={()=>setval("")}>Clear button</button>
        </div>
    )
}
export default Input;