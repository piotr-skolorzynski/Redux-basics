import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, _) {
            state.isAuthenticated = true;
        },
        logout(state, _) {
            state.isAuthenticated = false;
        }
    }
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer }
