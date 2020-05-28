import React, { Component } from 'react'
import { history } from '../history'
import { connect } from 'react-redux';
import { loadBoard, updateBoard, queryBoards } from '../store/actions/boardActions';

class _Boards extends Component {
    state = {
        txt: ''
    }

    componentDidMount() {
        this.props.queryBoards();
    }


    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ txt: value })
        this.autoGrow(this.elTextarea)
    }


    backToboard = () => {
        history.push(`/board/${this.props.board._id}`)
    }

    handleLoadBoard = (id) => {
        this.props.loadBoard(id)
        history.push(`/board/${id}`)
    }

    render() {

        if (!this.state) return;
        const { boards } = this.props
        return (
            <section>
                <div className="boards-page">
                    <div className='boards flex column' >
                        <h1 className="boards-title flex">Boards</h1>
                        <div className="boards-container">
                            {boards && boards.map((board, idx) =>
                                <div className={`board-item board-item${idx}`} key={idx}
                                    onClick={() => this.handleLoadBoard(board._id)}
                                    style={board.imgUrl ?
                                        { backgroundImage: `url(${board.imgUrl})`, backgroundSize: 'cover' } : { backgroundColor: board.bgColor }} >
                                    {<h3>{board.name}</h3>}
                                </div>)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
        boards: state.trelloApp.boards
    }
}

const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    queryBoards
}

export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)


