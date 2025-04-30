//Reducer : is a func
const initValue = { value: 0 };
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "todoList/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };
    //NOT : state.value = state.value + 1;
    //      return state;

    //NOT : Math.random() Date.now();
    //NOT : Request to server
    // != predictable

    //compliance RULES => PURE FUNC
    default:
      return state;
  }
};

//Action
const INCREMENT = {
  type: "todoList/increment",
  payload: 10, //yes or no
};
//action creators
const incrementCreator = (payload) => {
  return {
    type: "todoList/increment",
    payload,
  };
};
incrementCreator(10);

//Dispatch : is a func
dispatch(INCREMENT);
dispatch(incrementCreator(15));