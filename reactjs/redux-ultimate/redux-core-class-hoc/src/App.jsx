import {
  increaseCounter,
  decreaseCounter
} from './action/actions'

import { connect } from 'react-redux'

function App(props) {
  const handleIncrease = () => {
    props.increaseCounter(5)
  }
  
  const handleDecrease = () => {
    props.decreaseCounter(5)
  }

  return (
    <>
      <h2>Redux hello, nvminh162</h2>
      <h2>Count: {props.count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: (payload) => dispatch(increaseCounter(payload)),
    decreaseCounter: (payload) => dispatch(decreaseCounter(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
