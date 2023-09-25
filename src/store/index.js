import { createStore } from 'redux';

export const ACTION_TYPES = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    incrementByValue: "INCREMENT_BY_VALUE",
    toggleCounterState: "TOGGLE_COUNTER_STATE"
}

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.increment:
            return { counter: state.counter += 1, showCounter: state.showCounter };

        case ACTION_TYPES.decrement:
            return { counter: state.counter -= 1, showCounter: state.showCounter };

        case ACTION_TYPES.incrementByValue:
            return { counter: state.counter + action.payload.value, showCounter: state.showCounter };

        case ACTION_TYPES.toggleCounterState:
            return { counter: state.counter, showCounter: !state.showCounter };

        default:
            return state;
    }
}

const store = createStore(counterReducer);

export default store;