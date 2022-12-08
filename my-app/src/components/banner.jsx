import Logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Banner() {

    const {token, logOut, firstName} = useSelector((state) => state.user.user);


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
                    <div className='main-nav-connected'>
                        <Link className="main-nav-item" to={'/user'}>
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                        </Link>
                        <Link className="main-nav-item" to={'/sign-in'} onClick={()=>logOut()}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                        </Link>
                    </div>
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