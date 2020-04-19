import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import PostForm from './components/Postform';

import store from './store';
// const store  = createStore(()=> [], {},applyMiddleware());

function App() {
  return (
    <Provider store= {store}>
      <div className="App">

        <PostForm />
      </div>
    </Provider>

  );
}

export default App;
