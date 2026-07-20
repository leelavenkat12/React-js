import React from 'react'
const Weather = () => {
    let temp = 16;
    if(temp<15){
return <h2>Its Cold Outside!</h2>;
    }
    else if(temp >=15 && temp <=25){
        return <h1>Its Nice outside</h1>;

    }
    else if(temp >25){
        return <h1>Its Hot outside</h1>;
    }
  
}

export default Weather
