
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
                        id: 'dsbnjinijfndb',
                        name: 'ideas',
                        desc: 'stam ideas',
                        cards:
                            [
                                {
                                    id: 'vfdbfb fds bnfsda njbas',   // our id                         
                                    bgColor: '#ddd',
                                    onPhase: 'ideas',
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
                        id: 'dsbnjinijddddfndb',
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
                        id: 'dsbnjidddasnidddddjfndb',
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
                        _id: 'ffdgdfsgbsfdbsfd',
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

function getCards() {
    return gBoards[0].cards;
}
function getById(cardId) {
    console.log('card id ', cardId, 'cards', gBoards[0].phaseLists[0].cards);

    return Promise.resolve(gBoards[0].phaseLists[0].cards.find(card => card.id === cardId));
}


export const cardService = {
    getCards,
    getById
}


