// import logo from './logo.svg';
import { useReducer } from "react"
import './App.css';
import reducer from "./reducer";
import { initialState } from "./reducer";


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1> count one :{count.firstCount}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "increment by 5", payload: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <h1>countTwo : {countTwo.secondCount}</h1>
      <button onClick={() => dispatchTwo({ type: "increment2", payload: 1 })}>Increment2</button>
      <button onClick={() => dispatchTwo({ type: "increment2 by 5", payload: 5 })}>Increment2 by 5</button>
      <button onClick={() => dispatchTwo({ type: "decrement2", payload: 1 })}>Decrement2</button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset2</button>
    </div>
  );
}

export default App;
