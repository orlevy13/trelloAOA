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
        // history.push(`/board/${id}`)
    }

    render() {

        if (!this.state) return;
        const { boards } = this.props
        return (
            <section>

                <h1>My Boards</h1>
                {boards && boards.map((board, idx) =>
                    <div key={idx} style={{ backgroundColor: board.bgColor }} onClick={() => this.handleLoadBoard(board._id)}>
                        <h3>{board.name}</h3>
                    </div>)}
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


