import { DECREMENT, INCREMENT } from "../context/variables";

export function reducer(state, action) {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            return state - 1;
        }
    }
    throw Error("Unknown action: " + action.type);
}
