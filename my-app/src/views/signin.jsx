import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as userActions from "../features/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Signin() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate()

    // Recupere token dans le state

    // useEffect()
    //Si il y a le token navgete ver user
     // 

    // console.log(userEmail, userPassword);
    const {token} = useSelector((state) => state.user.user);

    useEffect( () => {  
        if(token){
            navigate('/user')
        }
    })

    const dispatch = useDispatch()


    const handleLogin = (e) => {
        e.preventDefault();

        const payload = {
            email : userEmail,
            password : userPassword
        }
        dispatch(userActions.fetchAPILogin(payload))
    }
    
    return (
        <>
            <main className="main bg-dark">
                <div style={{display: 'flex'}}>
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label><input type="text" id="username" onChange={(e)=> setUserEmail(e.target.value) }/>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e)=> setUserPassword(e.target.value) }/>
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button className="sign-in-button" onClick={handleLogin}>Sign In</button> 
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Signin;