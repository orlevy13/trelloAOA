import { boardService } from '../../services/boardService'
export const LOAD_BOARD = 'LOAD_BOARD';



export function loadBoard(id) {
    return async dispatch => {
        const board = await boardService.getById(id);
        dispatch({ type: LOAD_BOARD, board });
    }
}