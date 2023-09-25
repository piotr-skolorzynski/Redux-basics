import { createSlice } from "@reduxjs/toolkit";

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

const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export { counterActions, counterReducer };
