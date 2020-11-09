import authReducer from './authReducer';
import snippetReducer from './snippetReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    snippet: snippetReducer
});

export default rootReducer;