import * as Redux from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { AppState } from './reducers';
import { decrementCounter, incrementCounter } from './actions';
import Header from './containers/Header'
import * as React from 'react';

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);

function increment() {
 store.dispatch(incrementCounter(1));
}

function decrement() {
 store.dispatch(decrementCounter(1));
}

class App extends React.Component{
  render(){
    return <Provider store={store}>
        <Header/>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </Provider>;
  };
}

export default App;
