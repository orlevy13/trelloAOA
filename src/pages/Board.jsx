import React, { Component } from 'react';
import { loadBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';
import { SearchOutlined, LabelOutlined, ListOutlined } from '@material-ui/icons';
import { MemberInitials } from '../cmps/MemberInitials.jsx';

class _Board extends Component {

    state = {
        isMenuShown: false
    }

    componentDidMount() {
        this.getBoardById();

    }

    getBoardById = () => {
        const id = this.props.match.params.id;
        this.props.loadBoard(id);
    }

    toggleMenu = () => {
        this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    }

    render() {
        const { board } = this.props;
        const menuClass = !this.state.isMenuShown ? 'board-menu display-none' : 'board-menu'

        return (
            (!board) ? 'loading' : <main style={{ "backgroundColor": board.bgColor }} className="board">
                <section className="board-nav flex space-between">
                    <div className="flex">
                        <div className="board-title" href="#">
                            <span dir="auto">Final Project</span>
                        </div>
                        <span className="board-nav-divider"></span>
                        <div className="board-members">
                            {board.members.map((member) => <MemberInitials key={member._id} member={member} />)}
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
                                    <div className="board-menu-icon" style={{ "backgroundColor": board.bgColor }}></div>
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
                    <PhaseList phases={board.phaseLists} />
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    loadBoard
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)

