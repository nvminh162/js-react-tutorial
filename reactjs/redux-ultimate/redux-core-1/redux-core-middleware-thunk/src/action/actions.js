import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./types";
import axios from "axios";

export const increaseCounter = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decreaseCounter = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

//start
//doing
//finish
export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest())
    try {
        const res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        dispatch(fetchUsersSuccess(data));
    } catch(error) {
        console.error("ERROR ", error)
        dispatch(fetchUsersError())
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};
