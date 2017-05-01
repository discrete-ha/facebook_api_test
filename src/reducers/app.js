import { SET_AUTHDATA, SET_USERDATA } from '../actions/login';
import { SET_FETCHING, SET_ERROR, SET_DIALOG } from '../actions/system';
import { SET_PAGE_DATA } from '../actions/pages';
import { combineReducers } from 'redux';

const appInitialState = {
    isFetching: true,
    authData : null,
    userData: null,
    errorText: null,
    pageData: null,
    dialog: {
        show: false,
        message: null
    }
};

const appReducer = (state = appInitialState, action) => {
    switch(action.type) {
        case SET_AUTHDATA:
            return {...state, authData: action.payload};
        case SET_USERDATA:
            return {...state, userData: action.payload};
        case SET_FETCHING:
            return {...state, isFetching: action.payload};
        case SET_ERROR:
            return {...state, errorText: action.payload};
        case SET_PAGE_DATA:
            return {...state, pageData: action.payload};
        case SET_DIALOG:
            return {...state, dialog: {
                show:  action.flag,
                message:  action.message
            }};
        default:
            return state;
    }
};

export default appReducer;
