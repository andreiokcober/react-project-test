import { useState } from "react";

export  const useFetchLoading =  (callback) => {
    const [isPostLoading,setIsPostLoading] = useState(true)
    const [isError,setError] = useState('')

    const  fetchPost = async (...args) => {
        try{
            setIsPostLoading(true)
            await callback(...args)
        }catch(e){
            setError(e.message)
        }
        finally{
            setIsPostLoading(false)

        }
    }
    return [fetchPost,isPostLoading,isError]
    
    
}

