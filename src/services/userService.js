import { httpService } from './httpService'
export const OPERETIONS = {
    ADD: 'Add',
    UPDATE: 'Updated',
    DELETE: 'Delete'
}
export const TYPES = {
    User: 'User'
}


async function query(filter) {
    var queryString = '';
    // if (filter) {
    //     if (filter.inStock !== '') queryString = `?inStock=${filter.inStock}`;
    //     if (filter.type !== '') (queryString === '') ? queryString = `?type=${filter.type}` : queryString += `&type=${filter.type}`;
    //     if (filter.name !== '') (queryString === '') ? queryString = `?q=${filter.name}` : queryString += `&q=${filter.name}`;
    // }
    const users = await httpService.get(`user/${queryString}`);
    return users;
}

async function getById(id) {
    const user = await httpService.get(`user/${id}`);
    return user
}

async function add(addeduser) {

    const newUser = {
        fullName: this.createfullName(addeduser.fName, addeduser.lName),
        password: addeduser.password,
        email: addeduser.email,
        createdAt: Date.now()
    }
    const user = await httpService.post(`user`, newUser);
    return user;
}

async function update(updateuser) {
    const user = await httpService.put('user', updateuser);
    return user;
}

async function remove(id) {
    await httpService.delete(`user/${id}`);
}

function getUserCopy(user) {
    return JSON.parse(JSON.stringify(user));
}


function createfullName(fName, lName) {

    return (fName + ' ' + lName);
}



function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

export const userService = {
    query,
    getById,
    remove,
    add,
    update,
    makeId,
    getUserCopy,
    createfullName
}