import { useState } from "react";

function Counter(){
    const  [number , setNumber] = useState(0) ; 

    function handleClick(e){
        console.log("Render Counter ")
        e.stopPropagation();
       
// This shows that there is some Delay in the Rendering process 
       setTimeout(() =>{
        setNumber( number => number+1)
       },2000)
       

        console.log({number})
    }

    return(
        <>
        <h1 style = {{color:'white'}}>{number}</h1>
        <button onClick={handleClick}> ADD </button>
        </>
        
    )


}

export default Counter ; 