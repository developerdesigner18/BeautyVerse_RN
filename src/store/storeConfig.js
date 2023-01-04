import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './reducers/auth-reducers/login-reducer';
import signupReducer from './reducers/auth-reducers/singup-reducer';
import verifyOTPReducer from './reducers/auth-reducers/otp-verify-reducer';
import profilePicReducer from './reducers/profile-reducers/profile-pic-reducer';
import forgotPassReducer from './reducers/auth-reducers/forgot-pass-reducer';
import resetPassReducer from './reducers/auth-reducers/reset-pass-reducer';
import getAddressReducer from './reducers/profile-reducers/get-address-reducer';
import addressReducer from './reducers/profile-reducers/address-reducer';
import userReducer from './reducers/profile-reducers/user-data-reduccer';
import removeAddressReducer from './reducers/profile-reducers/remove-address-reducer';
import changePasswordReducer from './reducers/profile-reducers/change-password-reducer';
import daysAndTimingReducer from './reducers/profile-reducers/days-timing-reducer';
import getDaysAndTimingReducer from './reducers/profile-reducers/get-days-timing-reducer';
import postBusinessPhotosReducer from './reducers/profile-reducers/post-images-reducer';
import getBusinessPhotosReducer from './reducers/profile-reducers/get-images-reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  singup: signupReducer,
  otp: verifyOTPReducer,
  profilePic: profilePicReducer,
  forgotPass: forgotPassReducer,
  resetPass: resetPassReducer,
  address: getAddressReducer,
  addressRes: addressReducer,
  profile: userReducer,
  removeAddress: removeAddressReducer,
  changePassword: changePasswordReducer,
  daysAndTiming: daysAndTimingReducer,
  timingsRes: getDaysAndTimingReducer,
  businessPhotos: postBusinessPhotosReducer,
  businessPhotosRes: getBusinessPhotosReducer,
});

const persistConfig = {
  key: 'root',
  version: 2,
  storage: AsyncStorage,
  // blacklist: ['login', 'singup'],
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
