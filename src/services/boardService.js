
const gBoards =
    [
        {
            _id: 'abcd',
            name: 'guest board',
            desc: 'for guest only, only guest users',
            type: 'guest',
            imgUrl: 'cloudinary',
            bgColor: '#00AECC',
            phaseLists:
                [
                    {
                        id: 'abcd',
                        name: 'ideas',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: 'vfdbfb fds bnfsda njbas',   // our id                         
                                    bgColor: '#ddd',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 159221158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dvsdvdsv',
                                                color: '#fff',
                                                txt: 'important'
                                            },
                                            {
                                                id: 'gdfgfsd',
                                                color: '#aaa',
                                                txt: 'good'
                                            }
                                        ],
                                    checkList:
                                        [
                                            {
                                                id: 'bakdsa',
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {
                                                id: 'bakdsjk',
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Aviad Guest',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'or Guest',
                                                img: 'http://cloudinary.com/or',
                                            }
                                        ],
                                    attachments:
                                        [
                                            {
                                                _id: '????vdfvdf',
                                                name: 'project-1.pdf',
                                                url: 'http://cloudinary.com/vhfdbhvhbfd'
                                            }
                                        ]
                                }
                            ]
                    },
                    {
                        id: 'efgh',
                        name: 'todo',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: 'vfdbfb fds bnfsda njbas',   // our id                         
                                    bgColor: '#ddd',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 159221158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dvsdvdsv',
                                                color: '#fff',
                                                txt: 'important'
                                            },
                                            {
                                                id: 'gdfgfsd',
                                                color: '#aaa',
                                                txt: 'good'
                                            }
                                        ],
                                    checkList:
                                        [
                                            {
                                                id: 'bakdsa',
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {
                                                id: 'bakdsjk',
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Aviad Guest',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'or Guest',
                                                img: 'http://cloudinary.com/or',
                                            }
                                        ],
                                    attachments:
                                        [
                                            {
                                                _id: '????vdfvdf',
                                                name: 'project-1.pdf',
                                                url: 'http://cloudinary.com/vhfdbhvhbfd'
                                            }
                                        ]
                                }
                            ]
                    },
                    {
                        id: 'jklmn',
                        name: 'doing',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: 'vfdbfb fds bnfsda njbas',   // our id                         
                                    bgColor: '#ddd',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 159221158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dvsdvdsv',
                                                color: '#fff',
                                                txt: 'important'
                                            },
                                            {
                                                id: 'gdfgfsd',
                                                color: '#aaa',
                                                txt: 'good'
                                            }
                                        ],
                                    checkList:
                                        [
                                            {
                                                id: 'bakdsa',
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {
                                                id: 'bakdsjk',
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Aviad Guest',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'or Guest',
                                                img: 'http://cloudinary.com/or',
                                            }
                                        ],
                                    attachments:
                                        [
                                            {
                                                _id: '????vdfvdf',
                                                name: 'project-1.pdf',
                                                url: 'http://cloudinary.com/vhfdbhvhbfd'
                                            }
                                        ]
                                }
                            ]
                    }
                ],
            members: //minmal details
                [
                    {
                        _id: 'ffdgdfsgbsfdbsfd',
                        fullName: 'Aviad Guest',
                        email: 'aviad@gmail.com',
                        img: 'http://cloudinary.com/aviad'
                    },
                    {
                        _id: 'fgfdsgfdgfsd',
                        fullName: 'Alon Guest',
                        email: 'alon@gmail.com',
                        img: 'http://cloudinary.com/alon',
                    },
                    {
                        _id: 'ffdgdfsgbsgdssdfdbsfd',
                        fullName: 'Or Guest',
                        email: 'or@gmail.com',
                        img: 'http://cloudinary.com/or',
                    }
                ],
            activities:
                [
                    {
                        at: 94347675686876,
                        operation: 'Added',
                        user: {
                            _id: 'ffdgdfsgbsfdbsfd',
                            fullName: 'Aviad Guest',
                            img: 'http://cloudinary.com/aviad',
                        },
                        card: {
                            id: 'vdsvdsvdsvsd',
                            title: 'scascsacas'
                        }
                    }
                ]
        }

    ];

function getBoards() {
    return gBoards;
}
function getById(boardId) {
    return Promise.resolve(gBoards.find(board => board._id === boardId));

}
function save(board) {
    if (board._id) {
        const idx = gBoards.findIndex(currBoard => currBoard._id === board._id);
        gBoards[idx] = board;
        return Promise.resolve(board);
    } else {
        console.error('Implement new board creation!!')
    }
}

function getBoardCopy(board) {
    return JSON.parse(JSON.stringify(board));
}

function getNewCard(partialCard) {
    return {
        ...partialCard,//this currently has only title
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

export const boardService = {
    getBoards,
    getById,
    save,
    makeId,
    getBoardCopy,
    getNewCard
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}