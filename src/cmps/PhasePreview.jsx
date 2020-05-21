import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { MoreHoriz, Close } from '@material-ui/icons';
import { CardList } from './CardList'
import { AddCard } from './AddCard';
import { CardPreview } from './CardPreview';

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
    }


    toggleInputShown = () => {
        if (!this.state.isInputShown) window.addEventListener('keydown', this.hideInput);
        else window.removeEventListener('keydown', this.hideInput);
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = (ev) => {
        if (ev.code === 'Escape' || ev.type === 'onblur') {
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

    toggleMenuShown = () => {
        if (this.state.isSortShown) {
            //making sure menu returns to default "state"
            this.setState({ isMenuShown: false, isSortShown: false });
        } else this.setState(prevState => ({ isMenuShown: !prevState.isMenuShown }));
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
        const { name, id, cards } = this.props.phase;
        const { newPhaseName, isInputShown, isMenuShown, isSortShown } = this.state;
        return (
            <Draggable draggableId={id} index={this.props.index}>
                {(provided) => (
                    <article className="phase flex column" {...provided.draggableProps} ref={provided.innerRef}>
                        <div {...provided.dragHandleProps} className="phase-header flex space-between">

                            {!isInputShown && <h5 className="phase-title grow"
                                onClick={this.toggleInputShown}>{name}</h5>}
                            {isInputShown && <form className="flex grow" onSubmit={this.handleSubmit}>
                                <input className="phase-name-input grow" type="text" name="newPhaseName"
                                    value={newPhaseName} autoFocus autoComplete="off"
                                    onBlur={this.toggleInputShown} onChange={this.handleChange} />
                            </form>}

                            <MoreHoriz className="pointer" onClick={this.toggleMenuShown} />
                            {isMenuShown && <div className="phase-menu flex column">
                                <div className="menu-header flex align-center">

                                    <h5 className="grow">List Actions</h5>
                                    <Close className="pointer" onClick={this.toggleMenuShown} />
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
                        <Droppable droppableId={id}>
                            {(provided) => (
                                <CardList>
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {cards.map((card, index) => <CardPreview key={card.id} card={card} index={index} />)}
                                        {provided.placeholder}
                                    </div>

                                </CardList>
                            )}
                        </Droppable>
                        <AddCard />
                    </article>
                )}
            </Draggable>
        );
    }
}