import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { regionReducer } from './countries/countries';
import fetchAll, { allReducer } from './regions/regions';

const reducer = combineReducers({
  regionReducer,
  allReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAll());

export default store;
