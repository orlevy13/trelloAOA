import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';
import { Clear, CreateOutlined } from '@material-ui/icons';
import { boardService } from '../services/boardService';
import { LabelEdit } from './LabelEdit';

class _LabelsEdit extends Component {

    state = {
        isEditMode: false,
        editLabel: null
    }

    toggleEditMode = (editLabel) => {
        if (editLabel) this.setState({ isEditMode: true, editLabel });
        else this.setState({ isEditMode: false, editLabel: null });
    }

    handleChange = ({ target }) => {
        this.setState({ editLabel: { txt: target.value } });
    }

    saveLabel = async (ev, editedLabel) => {
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);

        boardCopy.labels = boardCopy.labels.filter(label => {
            if (label.id === editedLabel.id) return editedLabel;
            return label
        })
        await this.props.saveBoard(boardCopy);// The await might be neccessary when working with DB
        this.toggleEditMode();
    }

    render() {
        const { toggleEditMode, saveLabel } = this;
        const { isEditMode, editLabel } = this.state;
        const { labels } = this.props.board;
        return (
            <section className="edit-labels">
                <div className="edit-labels-header flex align-center">
                    <p className="grow">Labels</p>
                    <button onClick={this.props.toggleIsLabelEditShown}><Clear /></button>
                </div>
                <div className="labels-gallery">
                    {labels.map(label => <LabelEdit saveLabel={saveLabel} isEditMode={isEditMode}
                        label={label} toggleEditMode={toggleEditMode} />)}

                    {isEditMode && <form>
                        <input type="text" name="txt" value={editLabel.txt} autoFocus
                            spellCheck="false" onChange={this.handleChange} />
                        <button type="button" onClick={() => { toggleEditMode(null) }}><CreateOutlined /></button>
                    </form>}

                </div>

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    updateBoard
}

export const LabelsEdit = connect(mapStateToProps, mapDispatchToProps)(_LabelsEdit)