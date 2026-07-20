function Greeting(){
    const Name  ="John"
    const date = new Date()
    return <div>
        <h1>{Name}</h1>
        <p>Date:{date.getDate()}</p>
    </div>
}
export default Greeting;