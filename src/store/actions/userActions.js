import { userService } from '../../services/userService';
export const LOAD_USER = 'LOAD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const QUERY_USERS = 'QUERY_USERS'
export const CREATE_USER = 'CREATE_USER';

export function login(userCreds) {
    return async dispatch => {
        const user = await userService.login(userCreds);
        dispatch(setUser(user));
    };
}

export function signup(userCreds) {
    return async dispatch => {
        await userService.signup(userCreds);
        dispatch(setUser(null));
    };
}

export function logout(userCreds) {
    return async dispatch => {
        await userService.logout(userCreds);
        dispatch(setUser(null));
    };
}
export function setUser(user) {
    return {
        type: 'SET_USER',
        user
    };
}

export function removeUser(userId) {
    return dispatch => {
        userService.remove(userId)
            .then(() => dispatch({ type: REMOVE_USER, userId }));
    }
}
