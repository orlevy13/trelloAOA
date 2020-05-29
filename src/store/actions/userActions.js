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
    "password": "123456",
    "img": "https://img.icons8.com/plasticine/2x/user.png"
}

export function queryUsers(filter) {
    return dispatch => {
        userService.query(filter)
            .then(users => dispatch({ type: QUERY_USERS, users }));
    }
}

export function loadUser(id) {
    return async dispatch => {
        const user = await userService.getById(id);
        dispatch({ type: LOAD_USER, user });
    }
}

export function addUser(addedUser) {
    return async dispatch => {
        const user = await userService.add(addedUser);
        dispatch({ type: ADD_USER, user })
    }
}

export function updateUser(updatedUser) {

    return async (dispatch, state) => {
        //const keepUser = userService.getUserCopy(state.user); not working right now the state.user is undifined; wierd!!!
        dispatch({ type: UPDATE_USER, user: updatedUser });

        try {
            await userService.update(updatedUser);
        } catch (err) {
            // dispatch({ type: UPDATE_USER, user: keepUser });
        }

        socketService.emit('user updated', updatedUser._id);
    }
}

export function removeUser(userId) {
    return dispatch => {
        userService.remove(userId)
            .then(() => dispatch({ type: REMOVE_USER, userId }));
    }
}
