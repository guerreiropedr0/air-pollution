import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { continentReducer } from './continents/continents';
import fetchAll, { allReducer } from './regions/regions';

const reducer = combineReducers({
  continentReducer,
  allReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAll());

export default store;
