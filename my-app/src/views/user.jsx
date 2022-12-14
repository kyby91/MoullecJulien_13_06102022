import Account from "../components/account";
import * as userActions from "../features/user";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'



function User() {

    const dispatch = useDispatch()
    const {token, firstName, lastName} = useSelector((state) => state.user.user);

    const navigate = useNavigate()


    useEffect( () => {
        if(token){
            dispatch(userActions.fetchAPIUserProfile(token))
        }else {
           navigate('/') 
        }
    }, [token])

    const [newName, setnewName] = useState('');
    const [newLastName, setnewLastName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            "firstName": newName,
            "lastName": newLastName
        }
        dispatch(userActions.updateUserProfile(token, payload))
        setIsShown(current => !current);
    }

    const [isShown, setIsShown] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsShown(current => !current);
    };
    
    
    return(
        <>
            <main className="main bg-dark correction">
                <div className="header">
                    <h1>Welcome back<br /> {firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={handleClick}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account/>
            </main>
            <section className="sign-in-content" id="new-name" style={{display: isShown ? 'block' : 'none'}}>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Edit Name</h1>
                    <form >
                        <div className="input-wrapper">
                            <label htmlFor="username">New First Name</label><input type="text" id="username" onChange={(e)=>{setnewName(e.target.value)}}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">New Last Name</label><input type="text" id="password" onChange={(e)=>{setnewLastName(e.target.value)}}/>
                        </div>
                        <button className="sign-in-button" onClick={handleLogin}>Save</button> 
                    </form>
            </section>
        </>
    )
}

export default User;