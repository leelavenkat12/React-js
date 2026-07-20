import React from 'react'
const TimesofDay = (props)=>{
    if(props.Times === "morning"){
        return <h1>Good Morning</h1>
    }
    else if(props.Times  === "afternoon"){
        return <h1>Good Afternoon</h1>
    }
    else if(props.Times == "Night"){
        return <h1>Good Night</h1>;
    }
    else{
        return <h1>Good sleep</h1>;
    }
}
const Greetingofprops= () => {
  return (
   <TimesofDay Times="Night"/> 
  );
}

export default Greetingofprops
