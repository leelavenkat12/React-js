// function  User({name,age,Email}){
// // console.log(props);


//     return (
// <>
//         <h1>Props in React js</h1>
//         <h2>Name:{name}</h2>
//         <h2>Age:{age}</h2>
//         <h2>Email:{Email}</h2>
        
// </>
//     )
// }
function User({user}){
    return(
        <>
            <hr />
            <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>
            <h2>Email:{user.Email}</h2>
        </>
    )
}
export default User;