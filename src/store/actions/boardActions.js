import { boardService } from '../../services/boardService'
export const LOAD_BOARD = 'LOAD_BOARD';
export const SAVE_BOARD = 'SAVE_BOARD';
<<<<<<< HEAD


=======
>>>>>>> e31c651937b17288a79384d4281ded36fa9d1b3a

export function loadBoard(id) {
    return async dispatch => {
        const board = await boardService.getById(id);
        dispatch({ type: LOAD_BOARD, board });
    }
}

export function saveBoard(board) {
    return async dispatch => {
        await boardService.save(board);
        dispatch({ type: SAVE_BOARD, board })
    }
}