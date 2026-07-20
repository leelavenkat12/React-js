import { useState } from "react"

function Exersice3 (){
    const [value,setvalue] = useState("")

    return(
        <div>

        <h1>Exerisce 3</h1>
         <input type="text" value={value }onChange={(event)=>setvalue(event.target.value)} name = "" id="" placeholder="Enter username" />
         {/* <input type="text"value={val} onChange={(event)=>setval(event.target.value)} name="" id="" placeholder="Enter username" /> */}
<button onClick={()=>setvalue("")}>Clear</button>

        <h1>{value}</h1>


        </div>

    )
}
export default Exersice3