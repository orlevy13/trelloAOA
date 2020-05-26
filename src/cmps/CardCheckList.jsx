import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PlaylistAddCheck } from '@material-ui/icons';
import { loadBoard, updateBoard, LOGGED_IN_USER } from '../store/actions/boardActions';
import { boardService, OPERETIONS, TYPES } from '../services/boardService'
import { Clear } from '@material-ui/icons';

class _CardCheckList extends Component {
    state = {
        checkList: null,
        todoText: '',
        onAdd: false,
        progress: 0,
        checklistTitle: ''
    }

    componentDidMount() {
        let checklistTitle;
        (this.props.card.checklistTitle ? checklistTitle = this.props.card.checklistTitle : checklistTitle = '')
        this.setState({ checkList: this.props.card.checkList, onAdd: false, checklistTitle },
            () => this.progressBarUpdate());
    }

    getCardById = (cardId = null) => {
        if (!this.props.board)
            return;
        let boardClone = JSON.parse(JSON.stringify(this.props.board));

        var card;
        for (let i = 0; i < boardClone.phaseLists.length; i++) {
            const phase = boardClone.phaseLists[i];
            phase.cards.forEach(currCard => {
                if (currCard.id === cardId) {
                    card = currCard;
                }
            });
        }
        return card;

    }

    progressBarUpdate = () => {
        const doneTodos = this.state.checkList.reduce((acc, currVal) => {
            if (currVal.isDone) {
                acc++
            }
            return acc
        }, 0)
        this.setState({ progress: Math.floor((doneTodos / this.state.checkList.length) * 100) });
    }

    addTodo = () => {
        if (!this.state.todoText) return

        let newTodo = { txt: this.state.todoText, isDone: false }
        let clone = this.state.checkList.slice();
        clone.push(newTodo);
        this.setState({ checkList: clone, todoText: '' }, () => {
            this.handleSaveBoard();
        });
    }

    getPhaseByCardId = (id) => {
        const curPhase = this.props.board.phaseLists.filter(phase => phase.cards.find(card => card.id === id));
        return curPhase;
    }

    handleSaveBoard = () => {
        let boardClone = JSON.parse(JSON.stringify(this.props.board));
        const cardId = this.props.card.id;
        let currPhase = boardClone.phaseLists.filter(phase => phase.cards.find(card => card.id === cardId))[0];

        const updatedCards = currPhase.cards.map(card => {
            if (card.id === this.props.card.id) {
                card.checkList = this.state.checkList;
                card.checklistTitle = this.state.checklistTitle;
            }
            return card;
        })
        const phaseIndex = boardClone.phaseLists.findIndex(phase => phase.id === currPhase.id)
        currPhase.cards = updatedCards;
        boardClone.phaseLists[phaseIndex] = currPhase;
        boardService.addActivity(boardClone, LOGGED_IN_USER, OPERETIONS.UPDATE, TYPES.CARD,
            { id: this.props.card.id, title: this.props.card.title },
            `update checklist on card ${this.props.card.title}`);

        this.props.updateBoard(boardClone)
            .then(() => {
                this.progressBarUpdate();
            })
    }


    toggleAdd = () => {
        console.log('this.state before', this.state)
        if (this.state.todoText) this.addTodo();
        this.setState(prevState => ({ onAdd: !prevState.onAdd }));
    }


    onDelete = (idx) => {
        let clone = this.state.checkList.slice();
        clone.splice(idx, 1);
        this.setState({ checkList: clone }, () => {
            this.handleSaveBoard();
        })
    }

    handleChange = ({ target }, idx = -1) => {
        const field = target.name;
        const value = (field === 'isDone') ? target.checked : target.value
        let cloneChkList = this.state.checkList.slice();
        if (field === 'isDone') {
            cloneChkList[idx].isDone = value;
            this.setState({ checkList: cloneChkList }, () => {
                this.handleSaveBoard();
            });
        }

        else {
            if (idx === -1)
                (this.state.onAdd ? this.setState({ todoText: value }) : this.setState({ checklistTitle: value }))

            else {

                cloneChkList[idx].txt = value;
            }
        }
        this.setState({ checkList: cloneChkList });

    }

    handleFocus = (event) => event.target.select();

    handleKeyPress(e) {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }



    render() {
        const { todoText, onAdd, checklistTitle } = this.state;
        if (!this.state.checkList || !this.state.checkList.length) return null;
        const progressBgc = this.state.progress === 100 ? '#61bd4f' : '#2196f3';
        return (
            <div className="card-check-list">
                <div className="checklist-title-container flex align-center">
                    <PlaylistAddCheck className="checklist-icon" />
                    <input className="checklist-title" type="text" name="txt" placeholder="Checklist name..."
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress} spellCheck="false"
                        onFocus={this.handleFocus} onBlur={this.handleSaveBoard}
                        value={checklistTitle} /></div>
                <div className="progress-bar-container">
                    <div className="progress-bar"
                        style={{ width: `${this.state.progress}%`, backgroundColor: progressBgc }}></div>
                </div>
                {this.state.checkList.map((todo, idx) =>
                    <div className="checklist-item" key={idx} >
                        <input className="checkbox" type="checkbox" name="isDone" onChange={(e) => this.handleChange(e, idx)}
                            onBlur={this.handleSaveBoard} checked={todo.isDone} />
                        <input className="checklist-item-txt" type="text" name="txt"
                            onChange={(e) => this.handleChange(e, idx)} spellCheck="false"
                            onBlur={this.handleSaveBoard} value={todo.txt} />
                        <button onClick={() => this.onDelete(idx)}><Clear className="icon" /></button>
                    </div>)}
                {!onAdd && <button className="add-btn" onClick={this.toggleAdd}>Add Todo</button>}
                {onAdd && <div className="add-item flex align-center">
                    <input type="text" onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress} autoFocus onBlur={this.toggleAdd} value={todoText} />
                    <button className="save-checklist-item-btn">Save</button>
                </div>}
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
    loadBoard,
    updateBoard
}

export const CardCheckList = connect(mapStateToProps, mapDispatchToProps)(_CardCheckList)




