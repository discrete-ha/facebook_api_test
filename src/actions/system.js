export const SET_FETCHING = 'SET_FETCHING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DIALOG = 'SET_DIALOG';

export function setFetching(flag) {
    return {
        type: SET_FETCHING,
        payload: flag
    };
}

export function setError(message) {
    return {
        type: SET_ERROR,
        payload: message
    };
}

export function setDialog(flag, message) {
    return {
        type: SET_DIALOG,
        flag: flag,
        message: message
    };
}

