import { INCREMENT, DECREMENT } from "../action/types";

const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
