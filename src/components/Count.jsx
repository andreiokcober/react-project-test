import React, { useState } from "react";

const  Count = () => {
    const [count,setCount] = useState( 5)

    function Increment(){
        setCount(count +1)
    }
    function Decrement(){
        setCount(count -1)  
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment} className="button">Increment</button>
            <button onClick={Decrement} className="button">Decrement</button>
        </div>
        

    )
}
export default Count;