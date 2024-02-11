import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'userDetail',
    initialState: {
        username: null,
        token: null,
        mobile: null
    },
    reducers: {
        login: (state, action) => {
            const { username, token, phone } = action.payload;
            state.username = username;
            state.token = token;
            state.mobile = phone;
        },
        logout: (state) => {
            state.username = null;
            state.token = null;
            state.mobile = null;
            console.log('kushagra ');
            console.log(state.username);
            console.log(state.token);
        }
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
