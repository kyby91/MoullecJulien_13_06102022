import { useState } from "react";
// import axios from "axios";


function Test() {

     const [email, setEmail] = useState('');
    console.log(email)
    // const [userEmail, setUserEmail] = useState('');
    // const [userPassword, setUserPassword] = useState('');

    // console.log(userEmail, userPassword);

    // const payload = {
    //     email : userEmail,
    //     password : userPassword
    // }

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     axios({
    //       method: "post",
    //       url: 'http://localhost:3001/api/v1/user/signup',
    //       withCredentials: true,
    //       data: {
    //         userEmail,
    //         userPassword,
    //       },
    //     })
    //       .then((res) => {
    //         console.log(res);
    //         if (res.data.errors) {
    //             console.log('error');
    //         } else {
    //           window.location = "/user";
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    // };

    return(
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label for="username">Username</label><input type="text" id="username"/>
                            {/* <label for="username">Username</label><input type="text" id="username" onChange={(e)=> setUserEmail(e.target.value) }/> */}
                        </div>
                        <div className="input-wrapper">
                            {/* <label for="password">Password</label><input type="password" id="password" onChange={(e)=> setUserPassword(e.target.value) }/> */}
                            <label for="password">Password</label><input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                        </div>
                        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                        <button className="sign-in-button" >Sign In</button> 
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Test;