import React, { Component } from 'react'
import { CloseOutlined } from '@material-ui/icons/';
import { loadBoard, saveBoard } from '../../store/actions/boardActions'
import { boardService } from '../../services/boardService';
import { unsplashService } from '../../services/unsplashService'
import { connect } from 'react-redux';
import { ArrowBackIosOutlined } from '@material-ui/icons';

export class _PhotoMenu extends Component {

    componentDidMount() {
        // unsplashService.getListPhotos()
        //     .then(json => console.log(json));
    }

    changeBoardImg = (img) => {

        console.log(img);

        // if (!color) return;
        // const clonedBoard = boardService.getBoardCopy(this.props.board);
        // clonedBoard.bgColor = color;
        // clonedBoard.imgUrl = null;
        // this.props.saveBoard(clonedBoard);


    }

    render() {
        const menuClass = !this.props.isMenuShown ? 'board-menu display-none' : 'board-menu'
        return (
            <div className={menuClass}>
                <div className="flex column">
                    <div className="board-menu-header flex justify-center">
                        <ArrowBackIosOutlined onClick={() => this.props.onToggleMenu("backgroundMenu")} className="btn-header-menu" />
                        <h3 className="menu-header-title">Photos by<a href="https://unsplash.com/?utm_source=Flowz&utm_medium=referral&utm_campaign=api-credit" >Unsplash</a></h3>
                        <CloseOutlined onClick={() => this.props.onToggleMenu(null)} className="btn-header-menu" />
                    </div>
                    <span className="board-menu-header-divider"></span>
                    <div className="board-menu-content">
                        <div className="flex space-between wrap">
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(0, 121, 191)" }}
                                onClick={() => this.changeBoardColor("rgb(0, 121, 191)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(210, 144, 52)" }}
                                onClick={() => this.changeBoardColor("rgb(210, 144, 52)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(81, 152, 57)" }}
                                onClick={() => this.changeBoardColor("rgb(81, 152, 57)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(176, 70, 50)" }}
                                onClick={() => this.changeBoardColor("rgb(176, 70, 50)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(137, 96, 158)" }}
                                onClick={() => this.changeBoardColor("rgb(137, 96, 158)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(205, 90, 145)" }}
                                onClick={() => this.changeBoardColor("rgb(205, 90, 145)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(75, 191, 107)" }}
                                onClick={() => this.changeBoardColor("rgb(75, 191, 107)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(0, 174, 204)" }}
                                onClick={() => this.changeBoardColor("rgb(0, 174, 204)")} >
                            </div>
                            <div className='btn-color'
                                style={{ "backgroundColor": "rgb(131, 140, 145)" }}
                                onClick={() => this.changeBoardColor("rgb(131, 140, 145)")} >
                            </div>




                        </div>
                    </div>
                </div>
            </div>
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
    saveBoard
}

export const PhotoMenu = connect(mapStateToProps, mapDispatchToProps)(_PhotoMenu)
