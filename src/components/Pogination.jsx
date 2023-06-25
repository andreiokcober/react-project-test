import React from "react";
import {usePagePagination} from '../hooks/usePagePagination'

const Pogination = ({totalPage,page,getPage}) => {
    const pageArray = usePagePagination(totalPage) // hooks
    return(
        <div className="page-continer">
                {pageArray.map((p) => {
                return <span
                onClick={()=>getPage(p)} 
                key={p} 
                className={page === p ? 'page page-current' : 'page' }>{p}
                </span>
            })   
            }
            </div>
    )
}
export default Pogination