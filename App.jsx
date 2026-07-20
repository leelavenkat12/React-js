// import Header from "./Header";
// import Intro from "./Introduction";

import { useState } from "react";
import College from "./college";
import Event from "./Eventcallandfncall";
import Exersice from "./exersice1";
import Exersice2 from "./Exersice2";
import Hooks from "./Stateandhooks";
import Student from "./Student";
import { Toggle } from "./Toggle";
import User from "./user";

import Apple from "./varibles";
import Result from "./default";
import Wrapper from "./Wrapper";
import Input from "./Getinputfield";
import Exersice3 from "./Exersice3";
import Sol from "./controlledcomponent";
import Skills from "./CHECKBOX";
import Radio from "./RadiobuttonandDropdown";
import Loops from "./loops";


// import {createElement} from "react";
function App(){
  // let username = "leela Venkat"
  // let age = 29
  // let Email="Venkat@test.com"  
  // // return createElement("div",{id:"RootDiv"},"Hello creating without jsx ")
  let Userobj = {
    name:"leela venkat",
    age:19,
    Email:"Venkat@test.com"
  }
   let Userobj2 = {
    name:"Hasven",
    age:19,
    Email:"Hasven@test.com"
  }
   let Userobj3 = {
    name:"Hasini",
    age:19,
    Email:"Hasini@test.com"
  }
  let collegeNames = ['IIT','MIT','NIT','MU']
  const [student,setstudent]=useState()


    return (
      <>
      {/* <User name = {username} age={age} Email= {Email}/>
       */}
       {/* <Input />
        */}
        {/* <Exersice3 />  */}
        {/* <Sol /> */}
        {/* <Skills /> */}
        {/* <Radio /> */}
        <Loops />

        {/* <h1>Props in react By Obj</h1> */}
        {/* <Result /> */}
        {/* <Wrapper color = "Yellow" > */}
          {/* <h1>Anil siddu</h1> */}
        {/* </Wrapper> */}
        {/* <Wrapper color = "red" > */}
          {/* <h2>Leela Venkat</h2> */}
        {/* </Wrapper> */}
        {/* <Wrapper color="Blue"> */}
          {/* <h2>Leeela</h2> */}
        {/* </Wrapper> */}
        {/* {/* <College names={collegeNames[0]} />
         <College names={collegeNames[1]} />
          <College names={collegeNames[2]} /> */}
          {/* <button onClick={()=>{setstudent("Leela Venkat")}}>Changed name</button> */}
          {/* {student && <Student name={student}/>} */}
       {/* <User user={Userobj}/> */}
          {/* <User user={Userobj2}/> */}
             {/* <User user={Userobj3}/>  */}

       {/* <Exersice /> */}
      {/* < Apple /> */}
      {/* < Event />
      // <Hooks /> */}
      {/* <Toggle /> */}
      {/* <Exersice2 /> */}
      {/* <Hooks /> */}
      </>
    )
}
// function App(){
//   return (   
//     <div>
//       <h1>Hello</h1> <Intro />
//       <Header />
//     </div>
//   )
// }

// function Fruit(){
//   return (
//     <h1>Apple</h1>
//   )
// }

// function Water(){
//   return (
//     <h2>Black water</h2>
//   )
// }
 export default App;