import React, { Component } from 'react'
import { CloseOutlined } from '@material-ui/icons/';
import { loadBoard, updateBoard } from '../../store/actions/boardActions'
import { boardService } from '../../services/boardService';
import { unsplashService } from '../../services/unsplashService'
import { connect } from 'react-redux';
import { ArrowBackIosOutlined } from '@material-ui/icons';

export class _PhotoMenu extends Component {

    state = {
        imgs: null

    }

    componentDidMount() {
        if (!this.state.imgs) {
            unsplashService.getListPhotos()
                .then(json => {
                    const imgs = json.map(img => {
                        console.log(img)
                        return {
                            thumbUrl: img.urls.thumb,
                            regularUrl: img.urls.regular,
                            fullUrl: img.urls.full,
                            credit: `${img.user.links.html}?utm_source=Flowz&utm_medium=referral`,
                            userName: `${img.user.name}`
                        }
                    })
                    this.setState({ imgs }, () => {
                        console.log(this.state.imgs)
                    });
                })
        }

    }

    changeBoardImg = (img) => {

        console.log(img)
        if (!img) return;
        const clonedBoard = boardService.getBoardCopy(this.props.board);
        clonedBoard.imgUrl = img;
        clonedBoard.bgColor = null;
        this.props.updateBoard(clonedBoard);
    }

    render() {

        const menuClass = !this.props.isMenuShown ? 'board-menu display-none' : 'board-menu';
        const { imgs } = this.state;
        console.log('images:', imgs);
        return (
            <div className={menuClass}>
                <div className="flex column">
                    <div className="board-menu-header flex justify-center">
                        <ArrowBackIosOutlined onClick={() => this.props.onToggleMenu("backgroundMenu")} className="btn-header-menu" />
                        <h3 className="menu-header-title">Photos by<a className="unsplash" href="https://unsplash.com/?utm_source=Flowz&utm_medium=referral&utm_campaign=api-credit" >Unsplash</a></h3>
                        <CloseOutlined onClick={() => this.props.onToggleMenu(null)} className="btn-header-menu" />
                    </div>
                    <span className="board-menu-header-divider"></span>
                    <div className="board-menu-content">
                        <div className="flex space-between wrap">
                            {imgs && imgs.map((img, index) =>

                                <div className='btn-photo flex column align-center flex-end ' style={{ "backgroundImage": `url("${img.thumbUrl}")` }} key={index} onClick={() => this.changeBoardImg(img.fullUrl)} >
                                    <a className="credit" title={img.userName} target="_blank" rel="noopener noreferrer" href={img.credit} >{img.userName}</a>
                                </div>)}
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
    updateBoard
}

export const PhotoMenu = connect(mapStateToProps, mapDispatchToProps)(_PhotoMenu)
