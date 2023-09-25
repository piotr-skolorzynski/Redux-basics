import { createStore } from 'redux';

const ACTION_TYPES = {
    increment: "INCREMENT",
    decrement: "DECREMENT"
}

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case ACTION_TYPES.increment:
            return { counter: state += 1 }

        case ACTION_TYPES.decrement:
            return { counter: state -= 1 }

        default:
            return state

    }
}

const store = createStore(counterReducer);

export default store;