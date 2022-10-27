import Account from "../components/account";
import * as userActions from "../features/user";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


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

    
    return(
        <div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /> {firstName}!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account/>
            </main>
        </div>
    )
}

export default User;