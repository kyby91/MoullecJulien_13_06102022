import Logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

function Banner() {

    const {token, logOut} = useSelector((state) => state.user.user);
    console.log(token);

    // useEffect(()=>{
    //     if(!loggedIn){
    //         return( <nav className="main-nav">
    //         <Link className="main-nav-logo" to={'/'}>
    //             <img
    //             className="main-nav-logo-image"
    //             src={Logo}
    //             alt="Argent Bank Logo"
    //             />
    //             <h1 className="sr-only">Argent Bank</h1>
    //         </Link>
    //         <div>
    //             <Link className="main-nav-item" to={'/sign-in'}>
    //             <i className="fa fa-user-circle"></i>
    //             Sign In
    //             </Link>
    //         </div>
    //     </nav>)
    //     } else {
    //         return(<div></div>)
    //     }
    // },[loggedIn])


    return(
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
                {
                    token ?  
                    <Link className="main-nav-item" to={'/sign-in'} onClick={()=>logOut()}>
                    <i className="fa fa-user-circle"></i>
                    Sign Out
                    </Link>
                    :
                    <Link className="main-nav-item" to={'/sign-in'}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </Link>
                }
               
               
            </div>
            
        </nav>
    )
}

export default Banner;