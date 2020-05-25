import React, { Component } from 'react';
import { loadBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';
import { MemberInitials } from '../cmps/MemberInitials';
import { BoardMenu } from '../cmps/BoardMenu/BoardMenu';
import { ColorMenu } from '../cmps/BoardMenu/ColorMenu';
import { PhotoMenu } from '../cmps/BoardMenu/PhotoMenu';
import { MenuOutlined } from '@material-ui/icons';
import { BackgroundMenu } from '../cmps/BoardMenu/BackgroundMenu';


class _Board extends Component {

    state = {
        boardMenus: {
            currentOpend: null,
            menusState: {
                mainMenu: false,
                backgroundMenu: false,
                colorMenu: false,
                photoMenu: false
            }
        }
    }



    componentDidMount() {
        this.getBoardById();

    }

    getBoardById = () => {
       
        const id = this.props.match.params.id;
        this.props.loadBoard(id);
    }

    toggleMenu = (menuName) => {

        const { boardMenus } = this.state;
        const clonedMenus = JSON.parse(JSON.stringify(boardMenus));

        //close open menu if their is
        if (!menuName) { //menuName===null mean no menu should be open
            clonedMenus.menusState[clonedMenus.currentOpend] = false;
            clonedMenus.currentOpend = null;
        } else {
            if (clonedMenus.currentOpend != null)
                clonedMenus.menusState[clonedMenus.currentOpend] = !clonedMenus.menusState[clonedMenus.currentOpend];
            //open menu new menu
            clonedMenus.menusState[menuName] = !clonedMenus.menusState[menuName];
            //set currentOpend 
            clonedMenus.currentOpend = menuName;


        }
        this.setState({ boardMenus: clonedMenus });
    }

    render() {

        const { board } = this.props;
        if (!board) return '';
        console.log('board members: ', board.members);
        const { mainMenu, backgroundMenu, colorMenu, photoMenu } = this.state.boardMenus.menusState;
        const boardBg = board.bgColor ? { "backgroundColor": board.bgColor } :
            { "backgroundImage": `url("${board.imgUrl}")`, "background-size": "cover" }

        return (
            (!board) ? 'loading' : <main style={boardBg} className="board">
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
                    <div className="nav-btn">
                        <MenuOutlined onClick={() => this.toggleMenu("mainMenu")} />
                    </div>
                    <BoardMenu isMenuShown={mainMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <BackgroundMenu isMenuShown={backgroundMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <ColorMenu isMenuShown={colorMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <PhotoMenu isMenuShown={photoMenu} board={board} onToggleMenu={this.toggleMenu} />
                </section>
                <section className="board-content">
                    <PhaseList />
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