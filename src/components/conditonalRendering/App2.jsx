const Cart = () => {
    const items = ["Wireless Earbuds", "New SSD", "Hoodie","Blazer","Jackets    "];

    return (
        <div>
            <h1>Cart 🛒</h1>

            {items.length > 0 && (
                <h2>You have {items.length} items in your cart</h2>
            )}
            <ul>
                <h4>Products</h4>
                {items.map(item=>(
                    <li key={Math.random()}>{item}</li>
                ))}
            </ul>
        </div>
    );



};

const App2 = () => {
    return <Cart />;
};

export default App2;