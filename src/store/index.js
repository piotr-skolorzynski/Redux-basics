import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counter = createSlice({
    name: 'counter',
    initialState,
    reducer: {
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
    //dla pojedynczego
    reducer: counter.reducers
    //dla wielu, tutaj można wymienić do bólu
    //reducer: { counter: counter.reducer }
})

export default store;