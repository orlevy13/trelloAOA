import React, { Component } from 'react';
import { PhasePreview } from './PhasePreview';
import { Add, Close } from '@material-ui/icons';

export class PhaseList extends Component {
    state = {
        isInputShown: false,
        newListName: ''
    }

    toggleInputShown = () => {
        if (!this.state.isInputShown) this.addEventListeners();
        else this.removeEventListeners();
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = (ev) => {
        //To allow closing the input through Escape/click on something else
        // Cannot use 'onBlur', in order to allow adding lists in a row(Try at trello)
        if ((ev.code === 'Escape' ||
            ev.target !== document.querySelector('input[name=newListName]'))
            && ev.target !== document.querySelector('.submit-btn')) {
            this.setState({ isInputShown: false });
            this.removeEventListeners();
        }
    }

    handleChange = ({ target }) => {
        this.setState({ newListName: target.value })
    }

    addEventListeners = () => {
        window.addEventListener('keydown', this.hideInput);
        window.addEventListener('mousedown', this.hideInput);
    }

    removeEventListeners = () => {
        window.removeEventListener('keydown', this.hideInput);
        window.removeEventListener('mousedown', this.hideInput);
    }

    onAddPhase = (ev) => {
        ev.preventDefault();
        console.log('adding phase:', this.state.newListName)
        this.setState({ newListName: '' });
    }

    render() {
        const { toggleInputShown, onAddPhase, handleChange, hideInput } = this;
        const { isInputShown, newListName } = this.state;
        const { phases } = this.props;
        return (
            <section className="phase-list flex">
                {phases.length && phases.map(phase => <PhasePreview key={phase.id}
                    phase={phase} />)}

                {!isInputShown && <button className="add-list-btn flex"
                    onClick={toggleInputShown}> <Add fontSize="small" />Add new list</button>}
                {isInputShown && <form className="add-list-form" onSubmit={onAddPhase}>
                    <input type="text" autoFocus name="newListName" onChange={handleChange}
                        autoComplete="off" placeholder="Enter list title.." value={newListName} />
                    <div className="flex align-center">
                        <button className="submit-btn" type="submit">Add List</button>
                        <Close className="cancel-btn pointer" onClick={hideInput} />
                    </div>
                </form>}
            </section>
        )
    }
}