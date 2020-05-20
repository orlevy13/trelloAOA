import React, { Component } from 'react';

export class PhasePreview extends Component {
    state = {
        isInputShown: false,
        newPhaseName: ''
    }

    componentDidMount() {
        this.setState({ newPhaseName: this.props.phase.name })
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideInput);
    }


    toggleInputShown = () => {
        if (!this.state.isInputShown) window.addEventListener('keydown', this.hideInput);
        else window.removeEventListener('keydown', this.hideInput);
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = (ev) => {
        if (ev.code === 'Escape') {
            this.setState({ isInputShown: false });
            window.removeEventListener('keydown', this.hideInput);
        }
    }

    handleChange = ({ target }) => {
        this.setState({ newPhaseName: target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('Changing phase name:', this.state.newPhaseName)
        this.toggleInputShown();
    }

    render() {
        const { name } = this.props.phase;
        const { newPhaseName, isInputShown } = this.state;
        return (
            <article className="phase">
                <div className="phase-header flex space-between">
                    {!isInputShown && <h5 className="phase-title"
                        onClick={this.toggleInputShown}>{name}</h5>}
                    {isInputShown && <form className="flex grow" onSubmit={this.handleSubmit}>
                        <input className="grow" type="text" name="newPhaseName" value={newPhaseName}
                            autoFocus autoComplete="off" onChange={this.handleChange} />
                    </form>}
                    <button>•••</button>
                </div>
            </article>
        );
    }
}

