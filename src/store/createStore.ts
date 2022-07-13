import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../../src/reducers';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const GLOBAL_STATE = rootReducer;

export const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, GLOBAL_STATE);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);
