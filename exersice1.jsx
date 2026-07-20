function Exersice(){
    function callfunc(){
        alert("function called")
    }
    return (
        <>
        <h1>Anil Sidhu Todos</h1>
        <img src="https://f4.bcbits.com/img/a1108925211_16.jpg" alt="Anil Sidhu wife" class= "photo" 
        />
        <ul>
            <li>
                Invent new Traffic lights           </li>
                <li>Repharse a movie scene</li>
                <li>improve the spectrum technology </li>
        </ul>
        <button onClick={callfunc}>Clickme</button>

        </>
    )
}
export default Exersice;