import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = (payload) => {
    return {
        type: INCREMENT,
        payload
    }
}

export const decreaseCounter = (payload) => {
    return {
        type: DECREMENT,
        payload
    }
}