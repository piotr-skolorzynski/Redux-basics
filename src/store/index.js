import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counter = createSlice({
    name: 'counter',
    initialState,
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
})

const store = configureStore({
    reducer: counter.reducer
});

export const counterActions = counter.actions;

export default store;