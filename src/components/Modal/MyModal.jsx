import React from "react";
import cl from './MyModal.module.scss'

const MyModal = ({children,visable,setVisable}) => {
    
    const myModalVisable = [cl.myModal]

    if(visable === 'true'){
        myModalVisable.push(cl.active)
    }
    // stopPropagation останавливает event не срабатывает клик!
    return (
        <div className={myModalVisable.join(' ')} onClick={()=> setVisable('false')}>
            <div onClick={(e) => e.stopPropagation()}> 
                {children}
            </div>
        </div>
    )
}
export default MyModal