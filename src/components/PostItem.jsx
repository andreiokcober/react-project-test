import React from "react";
import MyButton from "./MyButton.jsx";
import {useNavigate} from 'react-router-dom'
    
const  PostItem = (props) =>{
    const navigate  = useNavigate()
    return(
        <div className="posts">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btn">
                <MyButton className="button" onClick={()=>props.remove(props.post)}>Удалить</MyButton>
                <MyButton className="button" onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
            </div>
        </div>
    )
}
export default PostItem