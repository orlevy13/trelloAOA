import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadBoard, updateBoard } from '../store/actions/boardActions';
import { Clear } from '@material-ui/icons';

class _CardCheckList extends Component {
    state = {
        checkList: null,
        todoText: '',
        onAdd: false,
        progress: null
    }

    componentDidMount() {
        this.setState({ checkList: this.props.card.checkList, onAdd: false },
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
            }
            return card;
        })
        const phaseIndex = boardClone.phaseLists.findIndex(phase => phase.id === currPhase.id)
        currPhase.cards = updatedCards;
        boardClone.phaseLists[phaseIndex] = currPhase;
        this.props.updateBoard(boardClone)
            .then(() => {
                this.progressBarUpdate();
            })
    }


    toggleAdd = () => {
        if (this.state.todoText)
            this.addTodo()
        this.setState(prevState => ({ onAdd: !prevState.onAdd }))
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
                this.setState({ todoText: value })
            else {
                cloneChkList[idx].txt = value;
            }
        }
        this.setState({ checkList: cloneChkList });
    }



    render() {
        const { todoText, onAdd } = this.state;
        if (!this.state.checkList || !this.state.checkList.length) return null;
        return (
            <div className="card-check-list">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${this.state.progress}%` }} ></div>
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
                {onAdd && <input type="text" onChange={this.handleChange}
                    autoFocus onBlur={this.toggleAdd} value={todoText} />}
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




