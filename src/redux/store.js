import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const client = axios.create({
  baseURL: 'https://api.glose.com',
  responseType: 'json',
});


const middleware = applyMiddleware(thunkMiddleware, axiosMiddleware(client), logger);

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export {
  store,
  persistor,
};
