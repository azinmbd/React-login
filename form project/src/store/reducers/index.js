import { combineReducers } from 'redux';
import BuildingReducer from './LoginSuccsess';
import LoginSuccsess from './LoginSuccsess';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export default combineReducers({
    BuildingReducer : persistReducer({key: 'BuildingReducer', storage, whitelist:['token', 'refreshToken']}, BuildingReducer),
    LoginSuccsess : persistReducer({key: 'LoginSuccsess', storage, whitelist:['token', 'refreshToken']}, LoginSuccsess)
})

