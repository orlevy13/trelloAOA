let localLoggedinUser = null;
const GUEST_USER = {
    "_id": "5ed4fd7181471d4e7041dcbe",
    "email": "guest@guest.co.il",
    "fullName": "Guest",
    "img": "https://img.icons8.com/plasticine/2x/user.png"
}

if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);
else localLoggedinUser = GUEST_USER;

const initialState = {
    users: [],
    user: localLoggedinUser
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER': {
            const logedInUser = (!action.user) ? localLoggedinUser : action.user
            return { ...state, user: logedInUser };
        }
        case 'USER_REMOVE':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };
        case 'SET_USERS':
            return { ...state, users: action.users };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case 'QUERY_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    };

}


