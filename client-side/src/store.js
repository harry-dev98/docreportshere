import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userReducer from './components/login/reducer';
import chatReducer from './components/chat/reducer';
import patientReducer from './components/patient/reducer';
const rootReducer = combineReducers({
    userState: userReducer,
    chatState: chatReducer,
    patientState: patientReducer,
});

const store = createStore(rootReducer, applyMiddleware(...[thunkMiddleware]));
export default store;