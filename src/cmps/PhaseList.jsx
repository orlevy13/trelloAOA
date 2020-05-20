import React, { Component } from 'react';
import { PhasePreview } from './PhasePreview';

export class PhaseList extends Component {//Getting phases from props?
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
        if ((ev.code === 'Escape' ||
            //To allow closing the input through Escape/click on something else
            ev.target !== document.querySelector('input[name=newListName]')
            && ev.target !== document.querySelector('.submit-btn'))) {
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
                {phases.map(phase => <PhasePreview key={phase.id}
                    phase={phase} />)}

                {!isInputShown && <button className="add-list-btn" onClick={toggleInputShown}>
                    + Add new list</button>}
                {isInputShown && <form className="add-list-form" onSubmit={onAddPhase}>
                    <input type="text" autoFocus name="newListName" onChange={handleChange}
                        autoComplete="off" placeholder="Enter list title.." value={newListName} />
                    <button className="submit-btn" type="submit">Add List</button>
                    <button className="cancel-btn" onClick={hideInput}>X</button> </form>}
            </section>
        )
    }
}