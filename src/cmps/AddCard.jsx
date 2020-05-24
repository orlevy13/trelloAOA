import React, { Component } from 'react';
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _AddCard extends Component {
    state = {
        card: {
            title: ''
        }
    }

    componentDidUpdate() {
        if (this.props.isAddCardShown) {
            this.cardNameInput.addEventListener("keypress", this.submitOnEnter);
            this.props.bottomCard.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleChange = ({ target }) => {
        this.setState({ card: { title: target.value } })
    }

    onAddCard = async (ev) => {
        ev.preventDefault();
        if (!this.state.card.title.trim()) return;

        const boardCopy = boardService.getBoardCopy(this.props.board);
        const phaseIdx = boardCopy.phaseLists.findIndex(phase => phase.id === this.props.phaseId);
        const newCard = boardService.getNewCard(this.state.card);
        boardCopy.phaseLists[phaseIdx].cards.push(newCard);
        await this.props.saveBoard(boardCopy);//async await is for the scroll
        this.setState({ card: { title: '' } });
        this.props.bottomCard.scrollIntoView({ behavior: 'smooth' });
    }

    submitOnEnter(ev) {
        // this allows Shift+Enter = new line, Enter = submit form
        if (ev.which === 13 && !ev.shiftKey) {
            ev.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
            ev.preventDefault();
        }
    }


    render() {
        const { handleChange, onAddCard, state } = this;
        const { toggleAddCardShown, isAddCardShown } = this.props;

        return (
            <div className="add-card">
                {isAddCardShown && <form onSubmit={onAddCard}>
                    <textarea className="card-name-input" required autoFocus type="text"
                        name="title" autoComplete="off" onChange={handleChange} spellCheck="false"
                        ref={el => this.cardNameInput = el} value={state.card.title}
                        placeholder="Enter a title for this card.." />
                    <div className="form-btns flex align-end">
                        <button className="submit-btn" type="submit">Add Card</button>
                        <button className="close-btn" onClick={toggleAddCardShown}><Close /></button>
                    </div>
                </form>}
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

export const AddCard = connect(mapStateToProps, mapDispatchToProps)(_AddCard)
