import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import ToggleButton from './src/index.js'

import toggleTextReducer from './src/reducer.js'



/**
 * This is main reducer, its where the reducer combined
 */

const mainReducers = combineReducers({
   toggleTextReducer
});

/**
 * create the store
 * single JS object that hold our state
 */
const store = createStore(
  combineReducers({ state: mainReducers }),
  applyMiddleware(thunkMiddleware)
);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ToggleButton/>
      </Provider>
    );
  }
}


export default App;