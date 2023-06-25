import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService.jsx";
import { useFetchLoading } from "../hooks/setFetchLoding.js";
import Loading from "../components/Loading.jsx";

const PostIdPage = () => {
    const params = useParams()
    const [post,setPost] =useState({})
    const [comment,setComent] = useState([])

    const [fetchPostByID,isPostLoading,isError] = useFetchLoading( async (id)=>{
        const response = await PostService.getPostById(id)
        setPost(response.data)
    })
    const [fetchPostComment,isCommentLoading,isCommentError] = useFetchLoading( async (id)=>{
        const response = await PostService.getPostComment(id)
        setComent(response.data)
    })
    useEffect(()=> {
      fetchPostByID(params.id)
      fetchPostComment(params.id)
    },[])

    return(
        <div>
            <h1>Мы перешли на страницу пользователя c ID {params.id}</h1>
            {isPostLoading
                ?<Loading/>
                :<div> {post.id}. {post.title}</div>
            }
            <h1>Коментарии</h1>
            {isCommentLoading
                ?<Loading/>
                :<div>
                    {comment.map( com => 
                        <div key={com.id}>
                            {com.email}
                            <div style={{marginTop:10}}>{com.body}</div>
                        </div>  
                    )}
                </div>
            }
        </div>
    )
}
export default PostIdPage