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
        }
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
