import { useState } from "react";

export function Toggle(){
    const [Display,setDisplay]= useState(true)
    const HandleDisplay = ()=>{
        setDisplay(!Display);
    }
return(
    <>
    <h1>Jsx Toggle/Hide or show</h1>
    <button onClick={HandleDisplay}>Toggle</button>
    {
        Display? <h1>Leela Venkat</h1>:null
    }
    </>
)
}