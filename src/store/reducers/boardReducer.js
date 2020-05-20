import { LOAD_BOARD } from '../actions/boardActions';

const initialState = {
    boards: null,
    board: null
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_BOARD:
            return {
                ...state,
                board: action.board
            }
        default:
            return state;
    };
}
