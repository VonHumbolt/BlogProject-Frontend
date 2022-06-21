
export const ADD_USER_REDUX = "ADD_USER_REDUX";
export const REMOVE_USER_REDUX = "REMOVE_USER_REDUX";

export function addUserToRedux(user) {
    return {
        type: ADD_USER_REDUX,
        payload: user
    }
}

export function removeUserToRedux(user) {
    return {
        type: REMOVE_USER_REDUX,
        payload: user
    }
}