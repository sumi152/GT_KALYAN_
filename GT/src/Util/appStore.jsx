import {configureStore} from '@reduxjs/toolkit'
import loginReducer from './loginSlice';
const appStore = configureStore({
    reducer:{
        userDetail: loginReducer,
    }
});

export default appStore;