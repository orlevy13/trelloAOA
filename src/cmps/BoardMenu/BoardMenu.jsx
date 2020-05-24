import React, { Component } from 'react';
import { SearchOutlined, LabelOutlined, ListOutlined, CloseOutlined } from '@material-ui/icons';

export class BoardMenu extends Component {


    render() {

        const menuClass = !this.props.isMenuShown ? 'board-menu display-none' : 'board-menu'
        const board = this.props.board;
        const boardBg = board.bgColor ? { "backgroundColor": board.bgColor } :
            { "backgroundImage": `url("${board.imgUrl}")`, "background-size": "cover" }
        return (
            <div className={menuClass}>
                <div className="flex column">
                    <div className="board-menu-header flex justify-center">
                        <h3 className="menu-header-title">Menu</h3>
                        <CloseOutlined onClick={() => this.props.onToggleMenu(null)} className="btn-header-menu" />
                    </div>
                    <span className="board-menu-header-divider"></span>
                    <div className="board-menu-content">
                        <div className="board-menu-item flex align-center" onClick={() => this.props.onToggleMenu('backgroundMenu')}>
                            <div className="board-menu-icon" style={boardBg}></div>
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
        )
    }
}
