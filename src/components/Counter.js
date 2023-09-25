import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';
import { ACTION_TYPES } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch({ type: ACTION_TYPES.increment });
  const decrementHandler = () => dispatch({ type: ACTION_TYPES.decrement });
  const incrementByFiveHandler = () => dispatch({ type: ACTION_TYPES.incrementByValue, payload: { value: 5 } });

  const toggleCounterHandler = () => dispatch({ type: ACTION_TYPES.toggleCounterState });

  return (
    <main className={ classes.counter }>
      <h1>Redux Counter</h1>
      { showCounter && <div className={ classes.value }>{ counter }</div> }
      <div>
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ incrementByFiveHandler }>Increase by 5</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={ toggleCounterHandler }>Toggle Counter</button>
    </main >
  );
};

export default Counter;
