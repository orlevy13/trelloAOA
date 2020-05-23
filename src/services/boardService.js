
const gBoards =
    [
        {
            _id: 'abcd',
            name: 'guest board',
            desc: 'for guest only, only guest users',
            type: 'guest',
            imgUrl: 'cloudinary',
            bgColor: '#00AECC',
            isLabelTxtShown: false,
            phaseLists:
                [
                    {
                        id: 'abcd',
                        name: 'ideas',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: '1234',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: 'https://res.cloudinary.com/marmelada/image/upload/v1590152526/xomsz3yqwwyqeuktpexk.jpg',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 1590237504000,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dvsdZwd213vdsv',
                                                color: '#61bd4f',
                                                txt: 'important'
                                            },
                                            {
                                                id: 'dvdsv',
                                                color: '#f2d600',
                                                txt: 'experienced only'
                                            },
                                            {
                                                id: 'dvsd567vdsv',
                                                color: '#ff9f1a',
                                                txt: 'fun to do'
                                            },
                                            {
                                                id: 'dv345dsv',
                                                color: '#eb5a46',
                                                txt: 'this is just a very very very long label'
                                            },
                                            {
                                                id: 'dv345dssav',
                                                color: '#0079bf',
                                                txt: 'klein blue'
                                            },
                                            {
                                                id: 'dss281av',
                                                color: '#00c2e0',
                                                txt: 'clear blue sky'
                                            },
                                            {
                                                id: 'dss2818av',
                                                color: '#ff78cb',
                                                txt: 'pinky'
                                            },
                                            {
                                                id: 'fl18av',
                                                color: '#344563',
                                                txt: 'darkish'
                                            },
                                            {
                                                id: 'fl18aolv',
                                                color: '#b3bac5',
                                                txt: 'grayish'
                                            },
                                            {
                                                id: 'gdfgfsd',
                                                color: '#c377e0',
                                                txt: 'doesn\'t matter'
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
                                           
                                        ]
                                },
                                {
                                    id: 'card 2',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: '',
                                    title: 'card 2',
                                    desc: 'using cli create new project',
                                    dueDate: 159221158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'fl18av',
                                                color: '#344563',
                                                txt: 'darkish'
                                            },
                                            {
                                                id: 'fl18aolv',
                                                color: '#b3bac5',
                                                txt: 'grayish'
                                            },
                                            {
                                                id: 'gdfgfsd',
                                                color: '#c377e0',
                                                txt: 'doesn\'t matter'
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
                                },
                                {
                                    id: 'card 3',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: '',
                                    title: 'card 3',
                                    desc: 'using cli create new project',
                                    dueDate: 159221158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dvsdZwd213vdsv',
                                                color: '#61bd4f',
                                                txt: 'important'
                                            },
                                            {
                                                id: 'dvdsv',
                                                color: '#f2d600',
                                                txt: 'experienced only'
                                            },
                                            {
                                                id: 'dvsd567vdsv',
                                                color: '#ff9f1a',
                                                txt: 'fun to do'
                                            },
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
                                    id: '5678',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: '',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 159225851158158,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dv345dssav',
                                                color: '#0079bf',
                                                txt: 'klein blue'
                                            },
                                            {
                                                id: 'dss281av',
                                                color: '#00c2e0',
                                                txt: 'clear blue sky'
                                            },
                                            {
                                                id: 'dss2818av',
                                                color: '#ff78cb',
                                                txt: 'pinky'
                                            },
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
                                    id: '91011',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: 'https://res.cloudinary.com/marmelada/image/upload/v1590152902/prnouct4tx5w3wjy6xqw.jpg',
                                    title: 'Save the empire',
                                    desc: 'using cli create new project',
                                    dueDate: 1382086394000,
                                    createdAt: 159221158158, //optional
                                    labels:
                                        [
                                            {
                                                id: 'dv345dssav',
                                                color: '#0079bf',
                                                txt: 'klein blue'
                                            },
                                            {
                                                id: 'dss281av',
                                                color: '#00c2e0',
                                                txt: 'clear blue sky'
                                            },
                                            {
                                                id: 'dss2818av',
                                                color: '#ff78cb',
                                                txt: 'pinky'
                                            },
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