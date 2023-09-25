import { createStore } from 'redux';

export const ACTION_TYPES = {
    increment: "INCREMENT",
    decrement: "DECREMENT",
    incrementByValue: "INCREMENT_BY_VALUE"
}

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case ACTION_TYPES.increment:
            return { counter: state.counter += 1 };

        case ACTION_TYPES.decrement:
            return { counter: state.counter -= 1 };

        case ACTION_TYPES.incrementByValue:
            return { counter: state.counter + action.payload.value };

        default:
            return state;

    }
}

const store = createStore(counterReducer);

export default store;