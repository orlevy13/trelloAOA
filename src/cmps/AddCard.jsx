import React, { Component } from 'react';
import { Add, Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _AddCard extends Component {
    state = {
        isInputShown: false,
        card: {
            title: ''
        }
    }

    toggleInputShown = () => {
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }), () => {
            if (this.state.isInputShown) {
                this.cardNameInput.addEventListener("keypress", this.submitOnEnter);
            }
        })
    }

    handleChange = ({ target }) => {
        this.setState(prevState => ({
            ...prevState,
            card: { title: target.value }
        }))
    }

    onAddCard = (ev) => {
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const phaseIdx = boardCopy.phaseLists.findIndex(phase => phase.id === this.props.phaseId);
        const newCard = boardService.getNewCard(this.state.card);
        boardCopy.phaseLists[phaseIdx].cards.push(newCard);
        this.setState({ card: { title: '' } });
    }

    submitOnEnter(ev) {
        // this allows Shift+Enter = new line, Enter = submit form
        if (ev.which === 13 && !ev.shiftKey) {
            ev.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
            ev.preventDefault();
        }
    }


    render() {
        const { toggleInputShown, handleChange, onAddCard, state } = this;
        const { isInputShown } = state;

        return (
            <div className="add-card">

                {!isInputShown && <button onClick={toggleInputShown}
                    className="add-card-btn flex align-center">
                    <Add className="add-icon" fontSize="large" />Add a card</button>}

                {isInputShown && <form onSubmit={onAddCard}>
                    <textarea className="card-name-input" required autoFocus type="text"
                        name="title" autoComplete="off" onChange={handleChange}
                        ref={el => this.cardNameInput = el} value={state.card.title}
                        placeholder="Enter a title for this card.." />
                    <div className="flex align-end">
                        <button className="submit-btn" type="submit">Add Card</button>
                        <button className="close-btn" onClick={toggleInputShown}><Close /></button>
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
