import User from "./Reuse";

function Loops(){
    const constobj=[
        {
            name:"leela venkat",
            age:"29",
            Email:"venkatleela95@gmail.com",
            Id:"1"
        },
        {
            name:"Has",
            age:"1",
            Email:"Has@gmail.com",
            Id:2,
        },
        {
            name:"Bujji",
            age:"9",
            Email:"Bujji@gmail.com",
            Id:3
        },
        

    ]

    return(
        <div>

{/* <h1>Loops in jsx With map Function </h1> */}
{/* <table border={1}>
    <thead >
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody>
        {
            constobj.map((obj)=>{
    return (
        <tr key={obj.Id}>
            <td>{obj.Id}</td>
            <td>{obj.name}</td>
            <td>{obj.Email}</td>
            <td>{obj.age}</td>
        </tr> 
    )
})
        }
    </tbody>

</table> */}
{/* <h1>Dummy Data</h1> */}
{/* <table border={"1"}>
    <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td> Age</td>
        </tr>
    </thead>
<tbody>
    <tr>

     <td>1</td>
     <td>Leela Venkat</td>
     <td>Venkatleela95@gmail.com</td>
     <td>29</td>
    </tr>
    <tr>

     <td>2</td>
     <td>Hasini</td>
     <td>Hasini@gmail.com</td>
     <td>20</td>
    </tr>

    <tr>

     <td>3</td>
     <td>User</td>
     <td>User@gmail.com</td>
     <td>19</td>
    </tr>
    
</tbody>
</table> */}

<h1>Reuse component in loop</h1>
{
    constobj.map((item)=>(
        <div key={item.Id}>
            <User data={item}/> 
        </div>
    ))
}
        </div>


    )
}
export default Loops;