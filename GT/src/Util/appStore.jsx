import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import passReducer from './passslice'; // Import passReducer from passSlice.jsx

const appStore = configureStore({
    reducer:{
        userDetail: loginReducer,
        userDetail2: passReducer,
    }
});

export default appStore;
