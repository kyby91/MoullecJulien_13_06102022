import { createSlice} from '@reduxjs/toolkit'
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
          state.statut = false
          state.loggedIn = true            
        },
        editProfile:(state, action) =>{
          console.log(action.payload)
          state.user.firstName = action.payload.firstName
          state.user.lastName = action.payload.lastName
        },
        logout: (state, action)=>{
          state.user.token = null
          state.statut = true
          state.loggedIn = false
        },
        changeName:(state, action) =>{
          state.user.firstName = action.payload.firstName
          state.user.lastName = action.payload.lastName
        }
    }
})




const {actions } = userSlice

export  const { login, editProfile, logout, changeName } = actions;

export default userSlice;



export function fetchAPILogin(data){
  
  return async (dispatch, getState) => {

    const state = getState()
    if(!state.user.statut){
      return
    }
    
    try {
      const dataReponse = await axios.post('http://localhost:3001/api/v1/user/login', data)
  
    
      dispatch(login(dataReponse.data.body.token)) 
      
    } catch (error) {
      
    }

  } 
}

export function fetchAPIUserProfile(token){
  return async (dispatch, getState ) => {
    
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
  
      dispatch(editProfile(payload)) 
    
    } catch (error) {
    }

  } 
}

export function logOut(dispatch){
  const payload = ''
  dispatch(logout(payload))
}

export function updateUserProfile(token, payload){
  console.log(payload.firstName, 'ok');
  return async (dispatch) =>{
    const config = {
      headers: {
        'Authorization' : `Bearer ${token}`,
      },
    }

    const response = await axios.put('http://localhost:3001/api/v1/user/profile', payload, config)
    dispatch(changeName(payload))
  }
}