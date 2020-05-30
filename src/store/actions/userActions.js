import { userService } from '../../services/userService'
import { socketService } from '../../services/socketService'
export const LOAD_USER = 'LOAD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const QUERY_USERS = 'QUERY_USERS'
export const CREATE_USER = 'CREATE_USER';

export const LOGGED_IN_USER = {
    "_id": "5eccd4e1cb39d7f54947fd7e",
    "fullName": "Guest",
    "email": "noemail@no.com",
    "img": "https://img.icons8.com/plasticine/2x/user.png"
}



export function login(userCreds) {
    return async dispatch => {
        const user = await userService.login(userCreds);
        console.log('actions user:', user);
        dispatch(setUser(user));
    };
}

export function signup(userCreds) {
    return async dispatch => {
        const user = await userService.signup(userCreds);
        dispatch(setUser(user));
    };
}

export function logout() {
    return async dispatch => {
        await userService.logout();
        dispatch(setUser(null));
    };
}

// export function addUser(addedUser) {
//     return async dispatch => {
//         const user = await userService.add(addedUser);
//         dispatch({ type: ADD_USER, user })
//     }
// }

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
