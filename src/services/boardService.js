import { httpService } from './httpService';
export const OPERETIONS = {
    ADD: 'Add',
    UPDATE: 'Updated',
    DELETE: 'Delete'
}
export const TYPES = {
    CARD: 'Card',
    PHASE: 'Phase',
    Board: 'Board'
}



async function query(filter) {
    var queryString = '';
    // if (filter) {
    //     if (filter.inStock !== '') queryString = `?inStock=${filter.inStock}`;
    //     if (filter.type !== '') (queryString === '') ? queryString = `?type=${filter.type}` : queryString += `&type=${filter.type}`;
    //     if (filter.name !== '') (queryString === '') ? queryString = `?q=${filter.name}` : queryString += `&q=${filter.name}`;
    // }
    const boards = await httpService.get(`board/${queryString}`);
    return boards;
}

async function getById(id) {
    const board = await httpService.get(`board/${id}`);
    return board
}

async function add(addboard) {

    const board = await httpService.post(`board`, addboard);
    return board;
}

async function update(updateboard) {
    const board = await httpService.put('board', updateboard);
    return board;
}

async function remove(id) {
    await httpService.delete(`board/${id}`);
}

function getBoardCopy(board) {
    return JSON.parse(JSON.stringify(board));
}

function getNewCard(partialCard) {
    return {
        ...partialCard,//this currently has only a title
        id: makeId(),
        bgColor: '',
        desc: '',
        dueDate: null,
        createdAt: Date.now(),
        labels: [],
        checkList: [],
        assignedTo: [],
        attachments: []
    }
}

function getNewPhase(name) {
    return {
        id: makeId(),
        name,
        desc: '',
        cards: []
    }
}

function addActivity(board, user, operation, type, object, desc = null) {
    const activity = {
        at: Date.now(),
        operation,
        user,
        type,
        object,
        desc
    }
    board.activities.unshift(activity);
}

function getSortedPhase(sortBy, phase) {
    if (sortBy === 'title') {
        return phase.cards.sort((card1, card2) => card1.title.localeCompare(card2.title))
    } else if (sortBy === 'firstCreated') {
        return phase.cards.sort((card1, card2) => card1.createdAt - card2.createdAt);
    } else return phase.cards.sort((card1, card2) => card2.createdAt - card1.createdAt);
}

function createNewBoard(name, bgColor, loggedInUser) {
    const _board = {

        name: name,
        bgColor: bgColor,
        createdAt: Date.now(),
        creator: loggedInUser,
        members: [loggedInUser],
        desc: null,
        activities: [],
        phaseLists: [],
        labels: [],
        isLabelTxtShown: false,
        imgUrl: null
    }
    return _board;
}

function getNewLabel({ txt, color }) {
    return {
        txt,
        color,
        id: makeId(),
    }
} 

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

export const boardService = {
    query,
    getById,
    remove,
    add,
    update,
    makeId,
    getBoardCopy,
    getNewCard,
    getNewPhase,
    getSortedPhase,
    addActivity,
    createNewBoard,
    getNewLabel,
    

}