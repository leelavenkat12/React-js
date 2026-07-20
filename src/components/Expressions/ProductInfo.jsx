function ProdcutInfo(){
    const Product =
        {
            Name:"Laptop",
            price:"$1200",
            availabilty:"In Stock"
        }
    
    return <div>
<h1>Name:{Product.Name}</h1>
<h1>Price:{Product.price}</h1>
<h1>Availabilty:{Product.availabilty}</h1>
    </div>
}
export default ProdcutInfo;