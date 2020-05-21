import React, { Component } from 'react';
import { Add } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _AddCard extends Component {
    state = {
        isInputShown: false,
        card: {
            name: ''
        }
    }

    toggleInputShown = () => {
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }), () => {
            if (this.state.isInputShown) {
                this.submitBtn.addEventListener("keypress", this.submitOnEnter);
            } else this.submitBtn.removeEventListener("keypress", this.submitOnEnter);
        })
    }

    handleChange = ({ target }) => {
        this.setState(prevState => ({
            ...prevState,
            card: { name: target.value }
        }))
    }

    hideInput = (ev) => {
        // console.log('ev.target', ev.target, 'ev.type', ev.type, ev,
        //     ev.currentTarget)

        // if (ev.type === 'blur') {
        //     console.log('hiding input')
        //     this.setState({ isInputShown: false });
        // }
        this.setState({ isInputShown: false });
    }

    onAddCard = (ev) => {
        console.log('submitting');
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        console.log('got boardCopy:', boardCopy);
    }

    submitOnEnter(ev) {
        console.log('submitting on enter') //FIX THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
        if (ev.which === 13) {
            ev.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
            // ev.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        }
    }


    render() {
        const { toggleInputShown, handleChange, onAddCard, hideInput, state } = this;
        const { isInputShown } = state;

        return (
            <div className="add-card">

                {!isInputShown && <button onClick={toggleInputShown}
                    className="add-card-btn flex align-center">
                    <Add fontSize="small" />Add a card</button>}
                {isInputShown && <form onSubmit={onAddCard}>
                    <textarea className="card-name-input" required autoFocus type="text"
                        name="name" autoComplete="off" onChange={handleChange}
                        value={state.card.name}
                        placeholder="Enter a title for this card.." />
                    <button ref={el => this.submitBtn = el} type="submit">Add Card</button>
                    <button onClick={hideInput}>X</button>
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
