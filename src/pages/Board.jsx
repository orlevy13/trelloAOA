import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';
import { boardService } from '../services/boardService';
import { SearchOutlined, LabelOutlined, ListOutlined } from '@material-ui/icons';

import { MemberInitials } from '../cmps/MemberInitials.jsx';


class _Board extends Component {

    state = {
        showMenu: false,
        board: null
    }

    componentDidMount() {
        this.getBoard();

    }
    getBoard = () => {

        //temporaly state!!!!!!!
        this.setState({ board: boardService.getBoards()[0] })


    }
    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });



    }
    render() {
        const { board } = this.state;
        const menuClass = !this.state.showMenu ? 'board-menu display-none' : 'board-menu'


        return (
            (!board) ? 'loading' : <main style={{ "background-color": board.bgColor }} className="board">
                <section className="board-nav flex space-between">
                    <div className="flex">
                        <div className="board-title" href="#">
                            <span dir="auto">Final Project</span>
                        </div>
                        <span className="board-nav-divider"></span>
                        <div className="board-members">
                            {board.members.map((member) => <MemberInitials member={member} />)}
                        </div>
                        <span className="nav-btn">Invite</span>
                    </div>
                    <span className="nav-btn" onClick={this.toggleMenu} >...Show Menu</span>
                    <div className={menuClass}>
                        <div className="flex column">
                            <div className="board-menu-header flex justify-center">
                                <h3 className="menu-header-title">Menu</h3>
                                <span onClick={this.toggleMenu} className="btn-close-board-menu">X</span>
                            </div>
                            <span className="board-menu-header-divider"></span>
                            <div className="board-menu-content">
                                <div className="board-menu-item flex align-center">
                                    <div className="board-menu-icon" style={{ "background-color": board.bgColor }}></div>
                                    <span className="board-menu-text">Change Background</span>
                                </div>
                                <div className="board-menu-item flex align-center">
                                    <SearchOutlined className="board-menu-icon" />
                                    <span className="board-menu-text">Search Cards</span>
                                </div>
                                <div className="board-menu-item flex align-center">
                                    <LabelOutlined className="board-menu-icon" />
                                    <span className="board-menu-text">Stickers</span>
                                </div>
                                <span className="board-menu-header-divider"></span>
                                <div className="board-menu-item flex align-center">
                                    <ListOutlined className="board-menu-icon" />
                                    <span className="board-menu-text">Activity</span>
                                </div>

                            </div>

                        </div>


                    </div>
                </section>
                <section className="board-content flex">
                    <PhaseList phases={[examplePhase]} />
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)

const examplePhase = {
    id: 'dsbnjinijfndb',
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
}