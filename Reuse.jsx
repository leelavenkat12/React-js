const User = ({data})=>{

    return(
        <div style={{
                border: "1px solid green",
    padding: "10px",
    width: "500px",
    margin: "5px",
    borderRadius:"10px",
}}>
    
<h1> Name:<span style={{color:"green"}}>
  {data.name} </span></h1>
<h1>Age:<span style={{color:'red'}}>
    {data.age}</span></h1>
   < h1>Email:<span style={{color:'Violet'}}>
    {data.Email}</span></h1>
        </div>
    )
}
export default User;