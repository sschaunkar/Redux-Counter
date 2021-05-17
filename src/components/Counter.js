import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
// import { Component } from 'react'
import { counterActions } from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const incementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const incrementbyNumHandler = () => {
    dispatch(counterActions.increase(10))
  };
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incementHandler}>Increment</button>
        <button onClick={incrementbyNumHandler}>Increment By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
// incementHandler = () =>{
//   console.log(this.props);
//   this.props.increment();
// }
// decrementHandler = () =>{
//   console.log(this.props);

//   this.props.decrement();
// }
// toggleCounterHandler = () => {}
// render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//   );
// }
// }

// const mapStatetoProps = state => {
//   return {
//     counter:state.counter
//   }
// }
// const mapDispatchtoProps = dispatch => {
//   return {
//     increment:()=>dispatch({type:'increment'}),
//     decrement:()=>dispatch({type:'decrement'})
//   }
// }

export default Counter;

// export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
