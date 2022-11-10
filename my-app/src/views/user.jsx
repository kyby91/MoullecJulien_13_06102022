import Account from "../components/account";
import * as userActions from "../features/user";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


function User() {

    const dispatch = useDispatch()
    // const token = useSelector((state) =>state.user.user.token);
    const {token, firstName, lastName} = useSelector((state) => state.user.user);

    console.log(firstName,lastName)
    

    // dispatch(userActions.fetchAPIUserProfile(token))
    useEffect( () => {
        console.log(token)
        if(token){
            dispatch(userActions.fetchAPIUserProfile(token))
        }

        //Si pas token -> page login
        
    }, [token])

    const [newName, setnewName] = useState('');
    const [newLastName, setnewLastName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            "firstName": newName,
            "lastName": newLastName
        }
        dispatch(userActions.changeName(payload))
        dispatch(userActions.updateUserProfile(token, payload))
        setIsShown(current => !current);
    }

    const [isShown, setIsShown] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsShown(current => !current);
    };
    
    
    return(
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /> {firstName} {lastName}!</h1>
                    <button className="edit-button" onClick={handleClick}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account/>
            </main>
            <section className="sign-in-content new-name" style={{display: isShown ? 'block' : 'none'}}>
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
        </div>
    )
}

export default User;