import { UPDATE_BOARD, QUERY_BOARDS, REMOVE_BOARD, ADD_BOARD, LOAD_BOARD } from '../actions/boardActions';

const initialState = {
    boards: [],
    board: null,
    card: null
}

export function boardReducer(state = initialState, action) {
    switch (action.type) {
        case QUERY_BOARDS:
            return {
                ...state,
                boards: action.boards
            }
        case LOAD_BOARD:
            return {
                ...state,
                board: { ...action.board }
            };
        case ADD_BOARD:
            return {
                ...state,
                // boards: [...state.boards, action.board],
                board: action.board
            };


        case UPDATE_BOARD:
            return {
                ...state,
                // boards: state.boards.map((board) => {
                //     if (board._id === action.board._id) return action.board;
                //     return board
                // }),
                board: { ...action.board }
            }
        case REMOVE_BOARD:
            return {
                ...state,
                boards: state.boards.filter(board => board._id !== action.boardId)

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


