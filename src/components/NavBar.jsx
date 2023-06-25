import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import MyButton from "./MyButton.jsx";

const NavBar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    function ExitAuth(){
        localStorage.removeItem('auth')
        setIsAuth(false)
        navigate('/login')
        
    }

    return (
        <div className="nav-bar">
            <MyButton onClick={ExitAuth}>Выйти</MyButton>
            <div className="nav-bar-links">
                <h2><Link to='/about'>О сайте</Link></h2>
                <h2><Link to='/posts'>Посты</Link></h2>
            </div>
          </div>
    )
}
export default NavBar