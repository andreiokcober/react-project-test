import React from "react";

function MyButton({children,...props}){

    return (
        <button {...props} className="button">{children}</button>
    )
}
export default MyButton