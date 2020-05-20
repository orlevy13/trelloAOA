import React, { Component } from 'react';
import { PhasePreview } from './PhasePreview';

export class PhaseList extends Component {//Getting phases from props?
    state = {
        isInputShown: false,
        newListName: ''
    }
    componentDidMount() {
        console.log('phaselist mounted')
    }


    toggleInputShown = () => {
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = () => {
        this.setState({ isInputShown: false })
    }

    handleChange = ({ target }) => {
        this.setState({ newListName: target.value })
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