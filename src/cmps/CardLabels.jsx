import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _CardLabels extends Component {

    toggleIsLabelTxtShown = (ev) => {
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        boardCopy.isLabelTxtShown = !boardCopy.isLabelTxtShown;
        this.props.updateBoard(boardCopy);
    }

    getUpdatedLabels = () => {
        const { labels } = this.props;
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const updatedLabels = labels.filter(label => {
            //get the correct labels from board
            const foundLabel = boardCopy.labels.find(boardLabel => boardLabel.id === label.id);
            if (foundLabel) return foundLabel;
            return null;
        })
        return updatedLabels;
    }

    render() {
        const { toggleIsLabelTxtShown } = this;
        const { isLabelTxtShown } = this.props.board;
        const labels = this.getUpdatedLabels();
        const labelClassName = isLabelTxtShown ? 'shown' : '';
        return (
            <div className="labels-container flex wrap">

                {labels.map(label => <span title={label.txt} className={`label ${labelClassName}`}
                    style={{ backgroundColor: label.color }}
                    onClick={toggleIsLabelTxtShown} key={label.id}>
                    <span className="label-txt">
                        {isLabelTxtShown && label.txt}</span>
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
    updateBoard,
}

export const CardLabels = connect(mapStateToProps, mapDispatchToProps)(_CardLabels)