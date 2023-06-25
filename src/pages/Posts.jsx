import React, { useMemo, useRef, useState,useEffect } from "react";
import PostForm from '../components/PostForm.jsx'
import PostList from "../components/PostList.jsx";
import FilterPost from "../components/FilterPost.jsx";
import MyModal from "../components/Modal/MyModal.jsx";
import MyButton from "../components/MyButton.jsx";
import { usePosts } from "../hooks/setPosts";
import PostService from '../API/PostService.jsx'
import Loading from "../components/Loading.jsx";
import {useFetchLoading} from "../hooks/setFetchLoding";
import {getPages} from '../utils/pages'
import Pogination from "../components/Pogination.jsx";
import { useObserver } from "../hooks/useObserver.js";
import MySelect from "../components/MySelect.jsx";

function  Posts  ()  {
    const [posts,setPost] = useState( [])
    const removeButton = (post) => {
        setPost(posts.filter( p => p.id !== post.id))
    }
    const createPost =  (newPost)=>{ 
        setPost([...posts,newPost])
        setModal('false')
    }
    const [modal,setModal] = useState('')
    const [filter,setFilter] = useState({sort : '', query : ''})
    const sortedSearchQuery = usePosts(posts,filter.sort,filter.query)
    const [totalPage,setTotalPqge] = useState(0)
    const [limits,setLimit] = useState(10)
    const [page,setPage] = useState(1)
    const lastCurrent = useRef()

    const [fetchPost,isPostLoading,isError] = useFetchLoading(async (limits,page)=>{
        const response = await PostService.getAll(limits,page)
        setPost([...posts,...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPqge(getPages(totalCount,limits))
       
        
    })
     const getPage = (page)=> {
        setPage(page)
    }
  
    useObserver(lastCurrent,isPostLoading,page < totalPage,()=>{
        setPage(page + 1)
    })
    
    useEffect(() => {
        fetchPost(limits,page)
    }, [page,limits]);
    

    return (
        <div className="App">
            {/* <Count/>   
            <InputSearch/> */}
            <MyButton onClick={()=> setModal('true')}>Cоздать пост</MyButton>
            <MyModal visable={modal} setVisable={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <FilterPost filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limits}
                onChange={value => setLimit(value)}
                defaultValue='Количество элементов'
                options={[
                    {value:5,name:'5'},
                    {value:10,name:'10'},
                    {value:15,name:'15'},
                    {value:-1,name:'Показать все'}
                ]}
            />
            {isError &&
            <h1>Просмотр Ошибки ${isError}</h1>
            }
            <PostList posts={sortedSearchQuery} title="Посты про js" remove={removeButton} />
            <div ref={lastCurrent} style={{height:20,background:'red'}}></div>
            {isPostLoading &&
                <Loading/>
            }
            <Pogination totalPage={totalPage} page={page} getPage={getPage}/>      
        </div>
              
    )
}

export default Posts;