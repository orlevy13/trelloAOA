import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { Clear } from '@material-ui/icons';
import { boardService } from '../services/boardService';
import { LabelEdit } from './LabelEdit';

class _LabelsEdit extends Component {

    state = {
        editLabel: null
    }

    toggleEditMode = (editLabel) => {
        this.setState({ editLabel });
    }

    handleChange = ({ target }) => {
        this.setState(prevState => ({
            editLabel: {
                ...prevState.editLabel,
                txt: target.value
            }
        }));
    }

    saveLabel = async (ev) => {
        ev.preventDefault();
        const editedLabel = this.state.editLabel;
        const boardCopy = boardService.getBoardCopy(this.props.board);

        boardCopy.labels = boardCopy.labels.map(label => {
            if (label.id === editedLabel.id) return editedLabel;
            return label;
        })
        await this.props.saveBoard(boardCopy);// The await might be neccessary when working with DB
        this.toggleEditMode();
    }

    toggleLabelOnCard = (label) => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;

        // Getting the access to the card labels inside the board
        const phaseIdx = boardCopy.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId)
        )
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        const card = boardCopy.phaseLists[phaseIdx].cards[cardIdx];

        //Checking if the card has the label or not and flip it
        if (card.labels.some(lbl => lbl.id === label.id)) {
            card.labels = card.labels.filter(lbl => lbl.id !== label.id);
        } else {
            card.labels.push(label);
        }
        boardCopy.phaseLists[phaseIdx].cards[cardIdx] = card;

        this.props.saveBoard(boardCopy);
    }

    render() {
        const { toggleEditMode, saveLabel, toggleLabelOnCard } = this;
        const { editLabel } = this.state;
        const { labels } = this.props.board;
        return (
            <section className="edit-labels">
                <div className="edit-labels-header flex align-center">
                    <p className="grow">Labels</p>
                    <button onClick={this.props.toggleIsLabelEditShown}><Clear /></button>
                </div>
                <div className="labels-gallery">
                    {!editLabel && labels.map(label => <LabelEdit toggleLabelOnCard={toggleLabelOnCard}
                        card={this.props.card} saveLabel={saveLabel} key={label.id} label={label}
                        toggleEditMode={toggleEditMode} />)}

                    {editLabel && <div>
                        <form onSubmit={saveLabel}>
                            <input type="text" name="txt" value={editLabel.txt} autoFocus
                                autoComplete="off" spellCheck="false" onChange={this.handleChange} />
                            <button className="save-btn">Save</button>
                        </form>
                        <button className="cancel-btn" onClick={() => { toggleEditMode(null) }}>
                            Cancel</button>
                    </div>}

                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
    }
}

const mapDispatchToProps = {
    saveBoard
}

export const LabelsEdit = connect(mapStateToProps, mapDispatchToProps)(_LabelsEdit)