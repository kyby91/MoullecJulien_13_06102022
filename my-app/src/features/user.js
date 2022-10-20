import {configureStore, createSlice} from '@reduxjs/toolkit'
// import { useEffect } from 'react';
import axios from "axios";

const fetchAPI = async (data, state)=>{
  const dataReponse = await axios.post('http://localhost:3001/api/v1/user/login', data)

  // axios.post('http://localhost:3001/api/v1/user/login', data)
  // .then((res) => {
    console.log(dataReponse.data,  dataReponse.data.body.token);
  //   // return state.user.token = res.data.body.token
  //   // console.log(state.user)
  //   // return state
  //   // if (res.data.errors) {
  //   //     console.log('error');
  //   // } else {
  //   //   window.location = "/user";
  //   // }
    return dataReponse.data.body.token
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        statut : true,
        user: {
            name : null,
            fisrtName : null,
            token : null
        }
    },
    reducers: {
        login: (state, action) =>{
          console.log(action)
          // const token = fetchAPI(action.payload , state);
          // console.log(token)
          // if(token){
          //   state.user.token = token
          // }
         
          
          //   axios.post('http://localhost:3001/api/v1/user/login', action.payload)
          // .then((res) => {
          //   console.log(res.data,  res.data.body.token);
            // return state.user.token = res.data.body.token
            // console.log(state.user)
            // return state
            // if (res.data.errors) {
            //     console.log('error');
            // } else {
            //   window.location = "/user";
            // }
            // const token = res.data.body.token
            // return data
            state.user.token = action.payload
            state.user.statut = false
          // })
          // .catch((err) => {
          //   console.log(err);
          // })
        },
        //Login (state, action)
            //FETCH / AXIOS
                //TOKEN
        // logout: (state, action)=>{
        //   state.user.token = null
        // }
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



export function fetchAPILogin(data){
  
  return async (dispatch, getState) => {

    const state = getState()
    console.log(state.user.statut)
    if(!state.user.statut){
      return
    }
    
    try {
      const dataReponse = await axios.post('http://localhost:3001/api/v1/user/login', data)
  
      console.log(dataReponse.data,  dataReponse.data.body.token);
    
      dispatch(login(dataReponse.data.body.token)) 
    } catch (error) {
      
    }

  } 
}

// {firstName: 'Tony',
//         lastName: 'Stark',
//         email: 'tony@stark.com',
//         password: 'password123',
//         loggedIn:'false'
//     }