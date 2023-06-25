import React, { useContext } from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import About from "../pages/About.jsx"
import PostIdPage from "../pages/PostIdPge.jsx"
import Posts from "../pages/Posts.jsx"
import ErrorRouter from "../components/ErrorRouter.jsx"
import Login from "../pages/login.jsx";
import { AuthContext } from "../context/index.js";



const AppRouter = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    // 
    return (
        isAuth 
            ?<Routes>
                <Route path="/about" element={<About/>} />   
                <Route exact path="/posts" element={<Posts/>} />  
                <Route exact path="/posts/:id" element={<PostIdPage/>} />  
                <Route path="/" element={<Navigate replace to="/posts"/>} />
                <Route path="/error" element={<ErrorRouter/>} />
                <Route path="*" element={<Navigate replace to="/error"/>} />
                
            </Routes>
            :<Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Navigate replace to="/login"/>} />
                <Route path="/error" element={<ErrorRouter/>} />
                {/* <Route path="*" element={<Navigate replace to="/error"/>} /> */}
                  
            </Routes>
           
    )
}
export default AppRouter