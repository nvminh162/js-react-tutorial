import { increaseCounter, decreaseCounter } from "./action/actions";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter(5));
  };

  const handleDecrease = () => {
    dispatch(decreaseCounter(5));
  };

  return (
    <>
      <h2>Redux hello, nvminh162</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  );
}

export default App;
