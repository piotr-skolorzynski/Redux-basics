import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, _) {
            state.counter++;
        },
        decrement(state, _) {
            state.counter--;
        },
        incrementByValue(state, action) {
            state.counter = state.counter + action.payload.value;
        },
        toggleCounterState(state, _) {
            state.showCounter = !state.showCounter;
        }
    }
});

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
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;