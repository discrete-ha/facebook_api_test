export const SET_AUTHDATA = 'SET_AUTHDATA';
export const SET_USERDATA = 'SET_USERDATA';

export function setAuthData(data) {
    return {
        type: SET_AUTHDATA,
        payload: data
    };
}

export function setUserData(data) {
    return {
        type: SET_USERDATA,
        payload: data
    };
}
