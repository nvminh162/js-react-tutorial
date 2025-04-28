import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../action/types";

const INITIAL_STATE = {
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state, users: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default userReducer;
