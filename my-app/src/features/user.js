import {configureStore, createSlice} from '@reduxjs/toolkit'
// import { useEffect } from 'react';
import axios from "axios";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        statut : true,
        loggedIn: false,
        user: {
            lastName : null,
            firstName : null,
            token : null
        }
    },
    reducers: {
        login: (state, action) =>{
          console.log(action)
          state.user.token = action.payload
          state.user.statut = false
          state.user.loggedIn = true
            // if (!action.payload) {
            //     console.log('error');
            // } else {
            //   window.location = "/user";
            // }
            
        },
        editProfile:(state, action) =>{
          console.log(action.payload)
          state.user.firstName = action.payload.firstName
          state.user.lastName = action.payload.lastName
        },
        logout: (state, action)=>{
          state.user.token = null
        }
        //EditProfil

        //ShowProfil
        // addUser: (state, action)=>{},
        // changeFirstName: (state, action)=>{},
        // changeLastName: (state, action)=>{}
    }
})




const {actions , reducer} = userSlice

export  const { login, editProfile } = actions;

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

export function fetchAPIUserProfile(token){
  return async (dispatch, getState ) => {
    // const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzViZTc2ZGU3MTZjMjMwYzdjNjgzOSIsImlhdCI6MTY2Njg3NTY4NSwiZXhwIjoxNjY2OTYyMDg1fQ.9jj0K3y45jPd7AWjMvrM-JIhjLEVlMudS3_R8xc0vts'
    try {
     
      const config = {
        headers: {
          'Authorization' : `Bearer ${token}`,
        },
      }
      const dataUser = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config)

      const payload = {
        firstName : dataUser.data.body.firstName,
        lastName : dataUser.data.body.lastName
      }
  
      console.log(dataUser);
      dispatch(editProfile(payload)) 
    
    } catch (error) {
      console.log(error);
    }

  } 
}