import React, { Component } from 'react';

export class PhasePreview extends Component {
    state = {
        isInputShown: false,
        isMenuShown: false,
        isSortShown: false,
        newPhaseName: ''
    }

    componentDidMount() {
        this.setState({ newPhaseName: this.props.phase.name })
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideInput);
        window.removeEventListener('mousedown', this.hideInput);
    }


    toggleInputShown = () => {
        if (!this.state.isInputShown) this.addEventListeners();
        else this.removeEventListeners();
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = (ev) => {
        if (ev.code === 'Escape' ||
            ev.target !== document.querySelector('.phase-name-input')) {
            this.setState({ isInputShown: false });
            this.removeEventListeners();
        }
    }

    addEventListeners = () => {
        window.addEventListener('keydown', this.hideInput);
        window.addEventListener('mousedown', this.hideInput);
    }

    removeEventListeners = () => {
        window.removeEventListener('keydown', this.hideInput);
        window.removeEventListener('mousedown', this.hideInput);
    }

    handleChange = ({ target }) => {
        this.setState({ newPhaseName: target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('Changing phase name:', this.state.newPhaseName)
        this.toggleInputShown();
    }

    toggleMenuShown = () => {
        this.setState(prevState => ({ isMenuShown: !prevState.isMenuShown }));
    }

    showAddCard = () => {
        console.log('showing add card field')
        this.toggleMenuShown();
    }

    toggleIsSortShown = () => {
        this.setState(prevState => ({ isSortShown: !prevState.isSortShown }));
    }

    sortListBy = (sortBy) => {
        console.log('implement sort list by:', sortBy);
        this.toggleIsSortShown();//to close the menu
        this.toggleMenuShown();
    }

    onDeletePhase = () => {
        console.log('Deleting list');
        this.toggleMenuShown();
    }

    render() {
        const { name } = this.props.phase;
        const { newPhaseName, isInputShown, isMenuShown, isSortShown } = this.state;
        return (
            <article className="phase">
                <div className="phase-header flex space-between">
                    {!isInputShown && <h5 className="phase-title"
                        onClick={this.toggleInputShown}>{name}</h5>}
                    {isInputShown && <form className="flex grow" onSubmit={this.handleSubmit}>
                        <input className="phase-name-input grow" type="text" name="newPhaseName"
                            value={newPhaseName} autoFocus autoComplete="off"
                            onChange={this.handleChange} />
                    </form>}
                    <button onClick={this.toggleMenuShown}>•••</button>
                    {isMenuShown && <div className="phase-menu flex column">
                        <div className="menu-header flex align-center">
                            <h5 className="grow">List Actions</h5>
                            <button onClick={this.toggleMenuShown}>X</button>
                        </div>
                        <div className="menu-btns flex column">
                            <button onClick={this.showAddCard} >Add A Card</button>
                            <button onClick={this.toggleIsSortShown}>Sort By..</button>
                            {isSortShown && <div className="sort-options flex column">
                                <button onClick={() => {
                                    this.sortListBy('name')
                                }}>Name</button>
                                <button onClick={() => {
                                    this.sortListBy('firstCreated')
                                }}>First Created</button>
                                <button onClick={() => {
                                    this.sortListBy('lastCreated')
                                }}>Last Created</button>
                            </div>}
                            <button onClick={this.onDeletePhase}>Delete List</button>
                        </div>
                    </div>}
                </div>
            </article>
        );
    }
}

