import React, { useState,useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter.jsx"
import NavBar from "./components/NavBar.jsx"
import {AuthContext} from './context/index.js'

export default function  App  ()  {
    const [isAuth,setIsAuth] = useState(false)
   

    useEffect(()=>{
      if(localStorage.getItem('auth')){
        setIsAuth(true)
      }
     
    },[])

    return (
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>   
      </AuthContext.Provider>        
    )
}

