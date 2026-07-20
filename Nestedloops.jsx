import College from "./Mapingatafornestedloopexample";

function Nestedloops(){
        const collegeData=[
            {
                name:"IIT GUHWATI",
                city:"Rajasthan",
                website:"www.iit_guhwati.com",
                student:[
                    {
                        name:"Leela Venkat",
                        age:"19",
                        email:"LeelaVenkat@test.com"
                    },
                     {
                        name:"Hasini",
                        age:"20",
                        email:"Hasini@test.com"
                    },
                     {
                        name:"Bruce",
                        age:"29",
                        email:"Bruce@test.com"
                    }
                ]
            
            },
              {
                name:"IIT Delhi",
                city:"Rajasthan",
                website:"www.delhi.com",
                student:[
                    {
                        name:"Leela Venkat",
                        age:"19",
                        email:"LeelaVenkat@test.com"
                    },
                     {
                        name:"Hasini",
                        age:"20",
                        email:"Hasini@test.com"
                    },
                     {
                        name:"Bruce",
                        age:"29",
                        email:"Bruce@test.com"
                    }
                ]
            
            },
              {
                name:"Marwadi university ",
                city:"Rajasthan",
                website:"ww.Marwadi.com",
                student:[
                    {
                        name:"Leela Venkat",
                        age:"19",
                        email:"LeelaVenkat@test.com"
                    },
                     {
                        name:"Hasini",
                        age:"20",
                        email:"Hasini@test.com"
                    },
                     {
                        name:"Bruce",
                        age:"29",
                        email:"Bruce@test.com"
                    }
                ]
            
            },


        ]
    return(
        <div>

<h1>Nested loops</h1>
{
    collegeData.map((item,index)=>{
       return <div key={index}>
            <College item={item} />
            {/* <h1>{item.city}</h1> */}
            {/* <h1>{item.name}</h1> */}


        </div>
    }) 
}
        </div>

    )
}
export default Nestedloops;