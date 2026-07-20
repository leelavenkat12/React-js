import React from 'react'

const Products = () => {
  return (
   <Basic
   Productname1 = "Iphone"
   Price = {999} />
  )
}
const Basic = (props) => {
  return (
    <section>
      <h2>Product Name: {props.Productname1}</h2>
      <p>Price: {props.Price}</p>
    </section>
  ) 
};
export default Products
