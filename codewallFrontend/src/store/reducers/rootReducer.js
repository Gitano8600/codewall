import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import snippetReducer from './snippetReducer';
import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
    auth: authReducer,
    snippet: snippetReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;