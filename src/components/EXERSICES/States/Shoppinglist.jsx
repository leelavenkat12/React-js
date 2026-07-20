import React, { useState } from 'react'

const Shoppinglist = () => {
    const [ items,setitems]= useState([]);
    const [ name,setName] = useState("");
    const [ quantity,setqunatity] = useState("");
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(!name || !quantity){
            return ;}
            const newitem = {
                name,
                quantity:parseInt(quantity)
            };
            setitems((previousitems)=>[...previousitems,newitem])
            setName('')
            setqunatity('')


    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text"  placeholder='Item name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="number" placeholder='Quantity' value={quantity} onChange={(e)=>setqunatity(e.target.value)} />
        <button type='submit' >Add Item</button>
      </form>

      {/* // to show the qunanttiy and shoping text */}
      <ul>
        {items.map((item,index)=>(
            <li key={index}>
                {item.name} - Quantity:{item.quantity}; 
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Shoppinglist
