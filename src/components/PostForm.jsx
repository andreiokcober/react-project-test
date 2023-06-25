import React,{useState} from "react";
import MyButton from "./MyButton.jsx";
import MyInput from "./MyInput.jsx";


const PostForm = ({create}) => {

    const [post,setPost] = useState({title:'',body:''})

    const addNewPost = (e)=>{
        e.preventDefault()
        const newPost = {
            ...post,id:Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
        
             
    }

    return(
        <form className="create-post">
                <MyInput
                    value={post.title}
                    onChange={e=>setPost({...post,title:e.target.value})}
                    placeholder='Название поста'
                    type="text" 
                />
                <MyInput 
                    value={post.body}
                    onChange={e => setPost({...post,body:e.target.value})}
                    placeholder='Описание поста'
                    type="text" />
                <MyButton  onClick={addNewPost} >Создать пост</MyButton>
            </form> 
    )
}
export default PostForm