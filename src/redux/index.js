import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';
import history from '../history';
import { saga } from '../ducks/people';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), thunk, logger);

const store = createStore(reducer, enhancer);
// TODO DEV only
window.store = store;

sagaMiddleware.run(saga);

export default store;
