
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { boardService } from '../services/boardService'
import { HomeOutlined, DashboardOutlined, SearchOutlined, AccountTreeOutlined, Add, Close } from '@material-ui/icons';
import { MemberInitials } from './MemberInitials';
import { history } from '../history'
import { connect } from 'react-redux';
import { loadBoard, updateBoard, addBoard } from '../store/actions/boardActions';
import { LOGGED_IN_USER } from '../store/actions/boardActions'

const isLogin = true;

class _MainNav extends Component {


    state = {
        isCreateBoardMenuShown: false,
        newBoardName: ''
    }


    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ newBoardName: value })
    }

    toggleAddBoard = () => {
        this.setState(prevState => ({ isCreateBoardMenuShown: !prevState.isCreateBoardMenuShown }))
    }

    createNewBoard = () => {
        const newBoard = boardService.createNewBoard(this.state.newBoardName, 'rgb(0, 124, 184)', LOGGED_IN_USER);

        this.props.addBoard(newBoard);
        this.props.loadBoard(newBoard.id);
        console.log('on create', this.props.board);
        history.push(`/board/${this.props.board._id}`)
        this.setState({ isCreateBoardMenuShown: false, newBoardName: '' })
    }



    render() {
        const { isCreateBoardMenuShown, newBoardName } = this.state
        if (!this.state) return ''
        return (
            <header className="main-header flex space-between">
                <nav className="flex align-center">
                    <Link to="/">
                        <div className="btn-main-nav">
                            <HomeOutlined className="btn-icon" />
                        </div>
                    </Link>
                    <Link to="/boards">
                        <div className="btn-main-nav flex align-center">
                            <DashboardOutlined className="btn-icon" />
                            <span className="btn-text">Boards</span>
                        </div>
                    </Link>
                    <div className="flex align-center">
                        <input className="search-input" type="text"></input>
                        <SearchOutlined className="search-icon" />
                    </div>
                </nav>
                <Link to="/">
                    <div className="nav-center flex align-center justify-center">
                        <div className="logo flex align-center">
                            <AccountTreeOutlined className="btn-icon" />
                            <span className="logo-text">Flowz</span>
                        </div>
                    </div>
                </Link>
                <nav className="right-nav flex flex-end align-center">
                    <div className="btn-main-nav" onClick={this.toggleAddBoard}>
                        <Add className="btn-icon" />
                    </div>
                    {isCreateBoardMenuShown && <div className="create-board-menu flex column">
                        <div className="board-menu-header flex align-center">
                            <h5 className="grow">List Actions</h5>
                            <Close className="pointer" onClick={this.toggleAddBoard} />
                        </div>
                        <div className="menu-btns flex column">
                            <input type="text" onChange={this.handleChange} value={newBoardName} />
                            <button onClick={this.createNewBoard} >Create a new Board</button>
                        </div>
                    </div>}
                    {
                        isLogin ? <span className="loged-in"><MemberInitials fullName="Or Levi" /></span> :
                            <div className="btn-main-nav">
                                <span className="btn-text">Login</span>
                            </div>
                    }

                </nav>
            </header >

        )
    }

}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    addBoard
}


export const MainNav = connect(mapStateToProps, mapDispatchToProps)(_MainNav)

