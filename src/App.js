import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incCounter } from './actions'
import Header from './components/header';
import ProductList from './components/product-list'

function App() {
  const counter = useSelector(({counter}) => counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Header/>
      <ProductList></ProductList>
      <button onClick={() => dispatch(incCounter())}>Increment</button>
      <p>{counter}</p>
    </div>
  );
}

export default App;
