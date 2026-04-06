import { useState } from "react";
function Exersice2() {
    
        const [count,SetDis] = useState(0)
        const HandleSetDis= ()=>{
            SetDis(count+1);
        
    }
    return (
        <div>
        <h1>Exersice 2:</h1>
        <h2>{count}</h2>
        <button onClick={HandleSetDis}>Counter</button>
{
    count==0?<h1>condition0</h1>:count==1?<h1>Condtion1</h1>:count==2?<h1>Condtion2</h1>:<h1>Other conditon</h1>
}
        </div>
    )
}
export default Exersice2;