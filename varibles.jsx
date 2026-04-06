function Apple(){
    const name = "Leela venkat"
    function operation(a,b,op) {
        if(op=='+'){
            return a+b;

        }
        else if(op=="-"){
            return a-b;
        }
        else{
            return a+b;
        }
    }
    // this is how obj want to display  
    const nameObj = {
        name:"Hasini",
        age:19,
        email:"shreehasini@gmail.com",
        college:"marwadi unviersity"    }
        // now how u can display from array
        const array = ["Venkat","sam","hasini"]
        // how u can show photo by variable
        const imgtag = "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/0bfe06ae-8c33-5655-8049-675d372b329e/2bca1809-8ec8-51e3-80c4-172e347a01cf.jpg"
    return (
    <>
    <h1>{name?name:"user not found "}</h1>
    <h1>Understanding how  varubles can visible in Jsx</h1>
    <h1>{operation(10,20,"-")}</h1>
    <h1>{nameObj.email}</h1>
    <h1>{array[1]}</h1>
    <img src={imgtag} alt="Dog Photo" />
    <input type={name} defaultValue={name} id={name} />
    <br />    
    </>
    )
}
export default Apple;