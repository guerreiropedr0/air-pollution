import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { regionReducer } from './countries/countries';

const reducer = combineReducers({
  regionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
