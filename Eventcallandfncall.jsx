const fruit = (name)=>{
        alert( "Outside one called" + name)
    }
function Event(){
    function app(){
        alert("Function called")
    }
    const fruit = (name)=>{
        alert("inside one called"+  name)
    }
    return (
        <>
        <h1>Event call and Function call</h1>
        <button onClick={app}>Btn</button>
        <button onClick={()=>fruit("Apple")}>Fruit</button>
        </>
    )
}
export default Event;
