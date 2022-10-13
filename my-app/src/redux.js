import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'



const store = configureStore ({
    reducer:{
        user: userReducer.reducer
    }
})


export default store;



