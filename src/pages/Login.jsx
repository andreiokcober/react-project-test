import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyInput from "../components/MyInput.jsx";
import MyButton from "../components/MyButton.jsx";
import {AuthContext} from '../context/index.js'


const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')  
        navigate('/posts')
    }
    return (
        <div>
            <h1>Cтраница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите ваше имя"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}
export default Login