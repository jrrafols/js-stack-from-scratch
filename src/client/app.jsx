/*
import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Dog from '../shared/dog';

const dogBark = new Dog('Browser Toby').bark();

const App = (props) => {
  return (
    <div>
    The dog says: {props.message}
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogBark} />, document.querySelector('.app'));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';

const store = createStore(combineReducers({
  dog: dogReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
    </div>
  </Provider>
  , document.querySelector('.app')
);
