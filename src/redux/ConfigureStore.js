import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchAll, { allReducer } from './worldwide/worldwide';
import { countryPollutionReducer } from './polution/polution';

const reducer = combineReducers({
  allReducer,
  countryPollutionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAll());

export default store;
