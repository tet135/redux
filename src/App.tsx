import React, { useRef } from 'react';
import './App.css';

import Counter from "./container/counter/index";
import {Cart} from './container/cart/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { incrementByAmount } from './container/counter/slice';
import { add } from './container/cart/slice';
import { inherits } from 'util';

const App: React.FC<{}> = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        {count}
        <button className="button" onClick={() => dispatch(incrementByAmount({value: 3}))}>+3</button>
      </header>
      <header>
        <input style={{margin: "20px"}} className="input" placeholder='Add to cart' onBlur={(e) => 
        {dispatch(add({name: e.target.value}))
        e.target.value = ''}
      }
          />
      </header>
      <Cart />
    </div>
  )
}

export default App;
