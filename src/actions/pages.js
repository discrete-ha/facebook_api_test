export const SET_PAGE_DATA = 'SET_PAGE_DATA';

export function setPageData(data) {
    return {
        type: SET_PAGE_DATA,
        payload: data
    };
}

