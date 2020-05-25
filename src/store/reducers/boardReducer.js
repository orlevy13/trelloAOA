import { LOAD_BOARD, SAVE_BOARD } from '../actions/boardActions';

const initialState = {
    boards: null,
    board: null,
    card: null
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_BOARD:
            return {
                ...state,
                board: action.board
            }
        case SAVE_BOARD:
            return {
                ...state,//TODO:At this point, update the boards array also
                board: action.board
            }
        case 'SET_CARD':
            return {
                ...state,
                card: action.card
            }
        default:
            return state;
    };
}
