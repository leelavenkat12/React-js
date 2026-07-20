import { useState } from "react";

function Skills(){
const [skills,setskills]=useState([]);
const handleSkills = (event)=>{
// console.log(event.target.value,event.target.checked); this will display in console as vlaue is printing and checked true or false
if(event.target.checked){
    setskills([...skills,event.target.value])
    
}
else{
    setskills([...skills.filter((item)=>item!=event.target.value)])
}

}
    return (
        <div>
            <h1>Select your Skills</h1>
            <input type="checkbox" onChange={handleSkills} id="xyz" value="PHP" />
            <label htmlFor="xyz">PHP</label>
            <br /> <br />
            <input type="checkbox"onChange={handleSkills} id="abc" value="Java"/>
            <label htmlFor="abc">Java</label> 
            {/* html for is used in chekcbox as u click on any value of that it will be check automatically */}
            <br /> <br />
            <input type="checkbox"onChange={handleSkills} id="xmx" value="Backend"/>
            <label htmlFor="xmx">Backend</label>
            <h1>{skills.toString()}</h1>
        </div>

    )

}
export default Skills;