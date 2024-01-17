import {applyMiddleware, createStore} from'redux'
import logger from'redux-logger'
import thunk from 'redux-thunk'

import { Increment,Decrement,IncrementByAmount } from "./Reducers/actionCreators.js";
import getUser from './Reducers/Middleware.js';
import Reducers from './Reducers/reducers.js';

const store = createStore(Reducers,applyMiddleware(logger.default,thunk.default))

store.dispatch(Increment())
// store.dispatch(getUser(1))