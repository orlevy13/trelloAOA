
const gBoards =
    [
        {
            _id: 'abcd',
            name: 'guest board',
            desc: 'fOr Levy only, only guest users',
            type: 'guest',
            imgUrl: 'cloudinary',
            bgColor: '#00AECC',
            isLabelTxtShown: false,
            phaseLists:
                [
                    {
                        id: 'abcd',
                        name: 'Ideas',
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
                                    createdAt: 1590231969025,
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
                                               
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                               
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffbsfdbsfd',
                                                fullName: 'Aviad Haim Jan',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Or Levy',
                                                img: 'http://cloudinary.com/or',
                                            }
                                        ],
                                    attachments:
                                        [

                                        ]
                                },
                                {
                                    id: '12ss34',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: 'https://res.cloudinary.com/marmelada/image/upload/v1590152526/xomsz3yqwwyqeuktpexk.jpg',
                                    title: 'Stam Card',
                                    desc: 'using cli create new project',
                                    dueDate: 1590237504000,
                                    createdAt: 1590231969794,
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
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                               
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffbsfdbsfd',
                                                fullName: 'Aviad Haim Jan',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Or Levy',
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
                                    createdAt: 1590231970416,
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
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                                
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'ffdgdfsgbsfdbsfd',
                                                fullName: 'Aviad Haim Jan',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: '1fg1as5d',
                                                fullName: 'Or Levy',
                                                img: 'http://cloudinary.com/or',
                                            },
                                            {
                                                _id: 'hgj5r662de',
                                                fullName: 'Alon Yaari',
                                                img: 'http://cloudinary.com/asdsad',
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
                                    createdAt: 1590231971025,
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
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                                
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'njjoam',
                                                fullName: 'Aviad Haim Jan',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'monjfs',
                                                fullName: 'Or Levy',
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
                        name: 'Todo',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: '567s8',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: 'https://res.cloudinary.com/marmelada/image/upload/v1590255534/driliielnvzknhcprzj7.png',
                                    title: 'Provide a placeholder when starting to drag a list, to prevent elements in the DOM to take its place before it\'s been moved',
                                    desc: '',
                                    dueDate: 1590342309000,
                                    createdAt: 1590231971641,
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
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                                
                                                txt: 'do your homework',
                                                isDone: false
                                            }
                                        ],
                                    assignedTo:
                                        [

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
                            ]
                    },
                    {
                        id: 'jklmn',
                        name: 'Doing',
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
                                    createdAt: 1590231972413,
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

                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'fdsnjihjf',
                                                fullName: 'Aviad Haim Jan',
                                                img: 'http://cloudinary.com/aviad',
                                            },
                                            {
                                                _id: 'hgj5re',
                                                fullName: 'Or Levy',
                                                img: 'http://cloudinary.com/or',
                                            },
                                            {
                                                _id: 'hgj5rasde',
                                                fullName: 'Alon Yaari',
                                                img: 'http://cloudinary.com/asdsad',
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
                        id: 'jkasdlmn',
                        name: 'Done',
                        desc: 'Done tasks',
                        cards:
                            [
                                {
                                    id: '9108211',   // our id                         
                                    bgColor: '#ddd',
                                    imgUrl: 'https://res.cloudinary.com/marmelada/image/upload/v1590254827/ymfrot6zdwnes4de2arn.jpg',
                                    title: 'Add drag n drop',
                                    desc: 'using cli create new project',
                                    dueDate: 1590324917876,
                                    createdAt: 1590231672413,
                                    labels:
                                        [
                                            {
                                                id: '345gs',
                                                color: '#0079bf',
                                                txt: 'klein blue'
                                            },
                                            {
                                                id: 'dss28fh561av',
                                                color: '#00c2e0',
                                                txt: 'clear blue sky'
                                            },
                                            {
                                                id: 'asd4gv',
                                                color: '#ff78cb',
                                                txt: 'pinky'
                                            },
                                        ],
                                    checkList:
                                        [

                                        ],
                                    assignedTo:
                                        [
                                            {
                                                _id: 'hgj5rasde',
                                                fullName: 'Alon Yaari',
                                                img: 'http://cloudinary.com/asdsad',
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
                                    id: '5678',
                                    bgColor: '#ddd',
                                    imgUrl: '',
                                    title: 'create-react-app ready to start',
                                    desc: 'using cli create new project',
                                    dueDate: 159225851158158,
                                    createdAt: 1590231971641,
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
                                                txt: 'do your homework',
                                                isDone: true

                                            },
                                            {                                               
                                                txt: 'do your homework',
                                                isDone: true
                                            }
                                        ],
                                    assignedTo:
                                        [

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
                        fullName: 'Aviad Haim Jan',
                        email: 'aviad@gmail.com',
                        img: 'http://cloudinary.com/aviad'
                    },
                    {
                        _id: 'fgfdsgfdgfsd',
                        fullName: 'Alon Yaari',
                        email: 'alon@gmail.com',
                        img: 'http://cloudinary.com/alon',
                    },
                    {
                        _id: 'ffdgdfsgbsgdssdfdbsfd',
                        fullName: 'Or Levy',
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
                            fullName: 'Aviad Haim Jan',
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

export const boardService = {
    getBoards,
    getById,
    save,
    makeId,
    getBoardCopy,
    getNewCard,
    getNewPhase,
    getSortedPhase
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}