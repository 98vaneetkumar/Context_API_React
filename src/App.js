import './App.css';
import { useContext } from 'react';
import Counter from './components/Counter';
import {CounterContext}  from "./context/CounterContext"
import { Item } from './components/Item';
import {CartProvider} from "./context/CartContext"
import { Cart } from './components/Cart';
function App() {
  const counterState=useContext(CounterContext);
  return (
    <div className="App">
      <h4>Count value is {counterState.count}</h4>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <CartProvider>
      <Item name='Phone' price='1000' /><br/>
      <Item name="Laptop" price="70000" /><br/>
      <Item name="Car" price="500000" />
      <Cart/>
      </CartProvider>
    </div>
  );
}

export default App;
