import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getData } from './data';

export default combineReducers({
    routing: routerReducer,
    getData
});