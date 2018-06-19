import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers';

const reducerInitializedStore = createStore(rootReducer);
console.log(reducerInitializedStore.getState());

// ReactDOM.render(<App />, document.getElementById('root'));


// registerServiceWorker();
