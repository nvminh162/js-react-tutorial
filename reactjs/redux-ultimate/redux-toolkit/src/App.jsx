import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/slices/counterSlice";

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1>@nvminh162, redux toolkit</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br />
      <div>Count: {count}</div>
    </>
  );
}

export default App;
