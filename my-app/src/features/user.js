import {configureStore, createSlice} from '@reduxjs/toolkit'
// import { useEffect } from 'react';
import axios from "axios";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name : null,
            fisrtName : null,
            token : null
        }
    },
    reducers: {
        login: (state, action) =>{
            axios.post('http://localhost:3001/api/v1/user/login', action.payload)
          .then((res) => {
            console.log(res.data,  res.data.body.token);

            // return state.user.token = res.data.body.token
            console.log(state.user)
            // return state
            // if (res.data.errors) {
            //     console.log('error');
            // } else {
            //   window.location = "/user";
            // }
          })
          .catch((err) => {
            console.log(err);
          })
        },
        //Login (state, action)
            //FETCH / AXIOS
                //TOKEN
        //Logout
        //EditProfil
        //ShowProfil
        // addUser: (state, action)=>{},
        // changeFirstName: (state, action)=>{},
        // changeLastName: (state, action)=>{}
    }
})


// const store = configureStore ({
//     reducer:{
//         user: userSlice.reducer
//     }
// })

const {actions , reducer} = userSlice

export  const { login } = actions;

export default userSlice;



// {firstName: 'Tony',
//         lastName: 'Stark',
//         email: 'tony@stark.com',
//         password: 'password123',
//         loggedIn:'false'
//     }


