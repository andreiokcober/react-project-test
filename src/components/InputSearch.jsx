import React,{useState} from "react";

function InputSearch (){
    const [value, setValue] = useState(' ')


    return(
        <div>
            <h1>{value}</h1>
            <input 
                type="text" 
                className="input-main" 
                value={value}
                onChange={event =>setValue(event.target.value) }
            />
        </div>
        
    )
}
export default InputSearch