import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'

var userInfoFromStorage = null

if (typeof window !== "undefined") {
    userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')): null
} 

const initialState = {
    currentUser: {
        user: userInfoFromStorage, 
        loggedIn: userInfoFromStorage ? true : false
    }
}

const store = createStore(rootReducer, initialState, composeWithDevTools( ));



export default store;