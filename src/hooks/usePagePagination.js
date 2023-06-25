import { useMemo } from "react"
export const usePagePagination = (totalPage) => {
    
    const pagesArray = useMemo(()=> {
        const result = []
        for(let i = 0;i<totalPage;i++){
            result.push(i + 1)
        }
        return result
    },[totalPage])
    return pagesArray
}