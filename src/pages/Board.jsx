import React, { Component } from 'react';
import { loadBoard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { PhaseList } from '../cmps/PhaseList';
import { MemberInitials } from '../cmps/MemberInitials';
import { BoardMenu } from '../cmps/boardMenu/BoardMenu';
import { ColorMenu } from '../cmps/boardMenu/ColorMenu';
import { PhotoMenu } from '../cmps/boardMenu/PhotoMenu';
import { MenuOutlined, PieChartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { BackgroundMenu } from '../cmps/boardMenu/BackgroundMenu';
import { Card } from '../cmps/Card';
import { BoardUserFilter } from '../cmps/BoardUserFilter'
import { socketService } from '../services/socketService';


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
        this.openSocket();
    }

    componentWillUnmount() {
        socketService.off('open board socket');
        socketService.terminate();
    }

    openSocket = () => {
        socketService.setup();
        const id = this.props.match.params.id;
        socketService.emit('open board socket', id);
        socketService.on('board updated', () => {
            this.getBoardById();
        });
    }


    getBoardById = async () => {
        const id = this.props.match.params.id;
        await this.props.loadBoard(id);
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

        const { mainMenu, backgroundMenu, colorMenu, photoMenu } = this.state.boardMenus.menusState;
        const boardBg = board.bgColor ? { "backgroundColor": board.bgColor } :
            { "backgroundImage": `url("${board.imgUrl}")`, "backgroundSize": "cover" }

        return (
            (!board) ? 'loading' : <main style={boardBg} className="board flex column grow">
                <section className="board-nav flex space-between">
                    <div className="flex">
                        <div className="board-title" href="#">
                            <span dir="auto">{board.name}</span>
                        </div>
                        <span className="board-nav-divider"></span>
                        <div className="board-members flex align-center">
                            {board.members && board.members.map((member) => <MemberInitials key={member._id} member={member} />)}
                        </div>
                        <BoardUserFilter />
                        <Link to={`/board/${board._id}/dashboard`}>
                            <div className="nav-btn  flex align-center">
                                <PieChartOutlined className="nav-icon" />
                                <span className="btn-text">Statistics</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-btn flex align-center" onClick={() => this.toggleMenu("mainMenu")}>
                        <MenuOutlined />
                    </div>
                    <BoardMenu isMenuShown={mainMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <BackgroundMenu isMenuShown={backgroundMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <ColorMenu isMenuShown={colorMenu} board={board} onToggleMenu={this.toggleMenu} />
                    <PhotoMenu isMenuShown={photoMenu} board={board} onToggleMenu={this.toggleMenu} />
                </section>
                <section className="board-content flex grow">
                    <PhaseList />
                </section>
                {this.props.card && <Card cardId={this.props.card.id} />}
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
        card: state.trelloApp.card
    }
}

const mapDispatchToProps = {
    loadBoard
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)