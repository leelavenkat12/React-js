import { useState } from "react";

function Radio(){
    const [std,usestd]=useState("Female");
    const [city,useCity]=useState("Mumbai");
    return (
        <div>
            <h1>Handle Radio And DropDown</h1>
            {/* As name should be same to select any one of the option only  */}
            <h3>Select Gender:{std}</h3>
            <input type="radio"onChange={(event)=>usestd(event.target.value)} name="Gender" id="Male" value={"male"} checked={std=='male'}/>
            <label htmlFor="Male">Male</label>
            <input type="radio" onChange={(event)=>usestd(event.target.value)} name="Gender" id="Female" value={"Female"}
            checked={std=='Female'}/>
            <label htmlFor="Female">Female</label>

            <br /> <br /> <br />
            <h1>Select city</h1>
            <select name="" id="" onChange={(e)=>useCity(e.target.value)} defaultValue={"mumbai"}>
                <option value="Delhi">Delhi</option>

                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
            </select>
            <h2>Selected City:{city}</h2>


        </div>
    )
}
export default Radio;