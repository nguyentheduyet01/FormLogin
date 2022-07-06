import { configureStore } from '@reduxjs/toolkit'
import loginstore from '../reducers/loginReducer'
export default configureStore({
    reducer:{
        loginstore: loginstore
    }
})