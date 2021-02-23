import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from './actions/counter'
import {sign_in} from './actions/isLogged'

function App() {
  const counter = useSelector( state => state.counter ) //mapStateToProps
  const isLogged = useSelector( state=> state.isLogged )

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2> Counter = {counter} </h2>
      <button onClick = {()=> dispatch(increment())}>INCREASE</button>
      <button onClick = {()=> dispatch(decrement())}>DECREASE</button>

      {
        (isLogged)&& 
        <h3>You're Logged in !!</h3>
      }
      {
        (!isLogged)&&
        <button onClick = {()=> dispatch(sign_in())}>Log in</button>
      }
    </div>
  );
}

export default App;
