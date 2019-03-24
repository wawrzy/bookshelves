import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './reducers';

const client = axios.create({
  baseURL: 'https://api.glose.com',
  responseType: 'json',
});


const middleware = applyMiddleware(thunkMiddleware, axiosMiddleware(client));

const store = createStore(reducers, middleware);

export default store;
