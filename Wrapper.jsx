function Wrapper({children,color}){
    return (
    <div style={{color:color,border:"5px solid green",width:"250px",margin:"12px" }}>
        {children}
            </div>
        
    )
}   
export default Wrapper;
