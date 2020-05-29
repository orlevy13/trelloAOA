import { UPDATE_USER, QUERY_USERS, REMOVE_USER, ADD_USER, LOAD_USER } from '../actions/userActions';
import { socketService } from '../../services/socketService';

const initialState = {
    users: [],
    user: null,
    card: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case QUERY_USERS:
            return {
                ...state,
                users: action.users
            }
        case LOAD_USER:

            return {
                ...state,
                user: { ...action.user }
            };
        case ADD_USER:
            return {
                ...state,
                user: action.user
            };
        case UPDATE_USER:
            socketService.emit('user updated', action.user._id)
            return {
                ...state,
                user: { ...action.user }
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };
        case 'SET_CARD':
            return {
                ...state,
                card: action.card
            }
        default:
            return state;
    };
}


