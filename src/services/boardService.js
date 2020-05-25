import {httpService} from './httpService'
const CLOUD_NAME = 'dcubdqpfg'

async function doUploadiMG(elForm) {

    console.log(CLOUD_NAME);
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const UPLOAD_PRESET = 'muxmg14s';
    var formData = new FormData();
    formData.append('file', elForm.files[0]);
    formData.append('upload_preset', UPLOAD_PRESET);

    await httpService.post(UPLOAD_URL, formData);
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

    const board = await httpService.put(`board/${updateboard}`, updateboard);
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

function getSortedPhase(sortBy, phase) {
    if (sortBy === 'title') {
        return phase.cards.sort((card1, card2) => card1.title.localeCompare(card2.title))
    } else if (sortBy === 'firstCreated') {
        return phase.cards.sort((card1, card2) => card1.createdAt - card2.createdAt);
    } else return phase.cards.sort((card1, card2) => card2.createdAt - card1.createdAt);

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
    doUploadiMG,
    makeId,
    getBoardCopy,
    getNewCard,
    getNewPhase,
    getSortedPhase
}