import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './reducers/login-reducer';

const rootReducer = combineReducers({login: loginReducer});

const persistConfig = {
  key: 'root',
  version: 2,
  storage: AsyncStorage,
  blacklist: ['login'],
};

const logger = createLogger({
  // ...options
});
const middleware = applyMiddleware(thunk, logger);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware),
);
export const PERSISTOR = persistStore(STORE);
