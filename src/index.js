import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import Counter from './components/Counter';
import counter from './reducers'

const store = createStore(counter);


const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncremenet={()=>store.dispatch({type: 'INCREMENT'})}
    onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
    plusFive={()=>store.dispatch({type: 'PLUS FIVE'})}
    minusFive={()=>store.dispatch({type: 'MINUS FIVE'})}
    zero={()=>store.dispatch({type: 'ZERO'})}
  />,
  document.getElementById('root')
);

render()
store.subscribe(render);
