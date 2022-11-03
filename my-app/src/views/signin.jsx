import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as userActions from "../features/user";
import { useDispatch, useSelector } from "react-redux";
import Logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';

function Signin() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate()


    // console.log(userEmail, userPassword);

    const dispatch = useDispatch()
    const ok = useSelector((state) =>state.user.token);


    const handleLogin = (e) => {
        e.preventDefault();

        const payload = {
            email : userEmail,
            password : userPassword
        }
        dispatch(userActions.fetchAPILogin(payload))
        navigate('/user')
    }
    
    return (
        <div>
            <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to={'/sign-in'}>
                <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
            </nav>
            <main className="main bg-dark">
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
            </main>
        </div>
    )
}

export default Signin;