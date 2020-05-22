import React, { Component } from 'react';
import { PhasePreview } from './PhasePreview';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Add, Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';

export class _PhaseList extends Component {
    state = {
        isInputShown: false,
        newListName: ''
    }

    componentWillUnmount() {
        this.removeEventListeners();
    }

    toggleInputShown = () => {
        if (!this.state.isInputShown) this.addEventListeners();
        else this.removeEventListeners();
        this.setState(prevState => ({ isInputShown: !prevState.isInputShown }))
    }

    hideInput = (ev) => {
        //To allow closing the input through Escape/click on something else
        // Cannot use 'onBlur', in order to allow adding lists in a row(Try at trello)
        if ((ev.code === 'Escape' || ev.target !== this.listNameInput)
            && ev.target !== this.submitBtn) {
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

    onAddPhase = async (ev) => {
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const newPhase = {
            id: boardService.makeId(),
            name: this.state.newListName,
            desc: '',
            cards: []
        }
        boardCopy.phaseLists.push(newPhase);
        await this.props.saveBoard(boardCopy);
        this.setState({ newListName: '' }, () => {
            this.listForm.scrollIntoView({ inline: 'end', behavior: 'smooth' });
        });
    }
    onDragEnd = result => {


        const { destination, source, type } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const boardCopy = boardService.getBoardCopy(this.props.board);
        if (type === 'PhasePreview') {

            const newPhasesOrder = boardCopy.phaseLists;
            const movingPhase = newPhasesOrder.splice(source.index, 1)[0];
            newPhasesOrder.splice(destination.index, 0, movingPhase);
            this.props.saveBoard(boardCopy);
        } else {
            const { phaseLists } = boardCopy;
            const srcPhase = phaseLists.find(phase => phase.id === source.droppableId);
            const dstPhase = phaseLists.find(phase => phase.id === destination.droppableId);

            if (srcPhase.id === dstPhase.id) {
                const movingCard = srcPhase.cards.splice(source.index, 1)[0];
                srcPhase.cards.splice(destination.index, 0, movingCard);
                this.props.saveBoard(boardCopy);
            } else {
                const srcCards = srcPhase.cards;
                const movingCard = srcCards.splice(source.index, 1)[0];
                const dstCards = dstPhase.cards;
                dstCards.splice(destination.draggableId, 0, movingCard);
                this.props.saveBoard(boardCopy);
            }
        }
    }


    render() {
        const { toggleInputShown, onAddPhase, handleChange, hideInput } = this;
        const { isInputShown, newListName } = this.state;
        const { phaseLists } = this.props.board;

        return (

            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-columns" direction="horizontal" type="PhasePreview">
                    {provided => (
                        <section className="phase-list flex"  {...provided.droppableProps} ref={provided.innerRef} >
                            {phaseLists && phaseLists.map((phase, index) => <PhasePreview key={phase.id} index={index}
                                phase={phase} />)}

                            {!isInputShown && <button className="add-list-btn flex align-center"
                                onClick={toggleInputShown}> <Add fontSize="small" />Add new list</button>}

                            {isInputShown && <form ref={el => this.listForm = el} className="add-list-form"
                                onSubmit={onAddPhase}>
                                <input ref={el => this.listNameInput = el} type="text" autoFocus
                                    name="newListName" onChange={handleChange} required autoComplete="off"
                                    placeholder="Enter list title.." value={newListName} />
                                <div className="flex align-center">
                                    <button ref={el => this.submitBtn = el} className="submit-btn"
                                        type="submit">Add List</button>
                                    <Close className="cancel-btn pointer" onClick={hideInput} />
                                </div>
                            </form>}
                            {provided.placeholder}
                        </section>
                    )}
                </Droppable>
            </DragDropContext>
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

export const PhaseList = connect(mapStateToProps, mapDispatchToProps)(_PhaseList)