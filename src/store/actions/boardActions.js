import { boardService } from '../../services/boardService'
export const LOAD_BOARD = 'LOAD_BOARD';
export const SAVE_BOARD = 'SAVE_BOARD';

<<<<<<< HEAD

=======
>>>>>>> 51014f79e906e9ad2752d2d241655d716fdb74e1
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