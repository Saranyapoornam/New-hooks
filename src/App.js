 /*here we have used useSelector and useDispatch.
 useSelector is used instead of mapStateTOProps in Redux,where we can access state in reducer
 useDispatch id used instead of mapDispatchToPros in Redux,where we can assign action for the reducer
if we are using this useSelector and useDispatch we no need to use connect
we can use it with Redux-Thunk but useReducer will not work with redux-Thunk.*/



import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      counter {counter}
      <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  );
}

export default App;
