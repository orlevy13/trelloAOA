import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _CardLabels extends Component {

    toggleIsLabelTxtShown = () => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        boardCopy.isLabelTxtShown = !boardCopy.isLabelTxtShown;
        this.props.saveBoard(boardCopy);
    }

    render() {
        const { toggleIsLabelTxtShown } = this;
        const { isLabelTxtShown } = this.props.board;
        const { labels } = this.props;
        return (
            <div className="labels-container flex wrap">

                {labels.map(label => <span className="label" style={{ backgroundColor: label.color }}
                    onClick={toggleIsLabelTxtShown} key={label.id}>
                    {isLabelTxtShown && <span>{label.txt}</span>}
                </span>)}
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
    saveBoard,
}

export const CardLabels = connect(mapStateToProps, mapDispatchToProps)(_CardLabels)