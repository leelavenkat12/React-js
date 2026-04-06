 import { useState } from "react";
function Hooks(){
    const    [fruit,SetFruit] = useState("Apple");
    const handleFruit = ()=>{
        SetFruit(
            "banana"
        )
    }
    return (
        <>
        <h1>State and hooks</h1>
        <h1>{fruit}</h1>
        <button onClick={handleFruit}>Changed Fruit</button>
        </>
        
    )
}
// const Hooks = ()=>{
//     const [Fruit , setFruit]=useState("apple")
//     const Handlefurit = ()=>{
//         setFruit("bannana")
//     }
//     return(
//         <>
//         <h1>State and hooks</h1>
//         <h1>{Fruit}</h1>
//         <button onClick={Handlefurit}>Changed fruit</button>
//         </>
//     )
// }
export default Hooks;