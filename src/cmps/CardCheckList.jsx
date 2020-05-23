import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadBoard, saveBoard } from '../store/actions/boardActions';
// import PropTypes from 'prop-types'

class _CardCheckList extends Component {
    state = {
        checkList: null,
        todoText: '',
        onAdd: false,
        progress: null


    }

    // static propTypes = {
    //     prop: PropTypes
    // }
    componentDidMount() {

        this.setState({ checkList: this.props.card.checkList, onAdd: false },
            () => this.setState({ progress: this.progressBarUpdate() }))
    }


    progressBarUpdate = () => {

        const doneTodos = this.props.card.checkList.reduce((acc, currVal) => {
            if (currVal.isDone) {
                acc++
                console.log('reduce func acc', acc, 'curr val is', currVal.isDone);
            }
            return acc
        }, 0)
        return (Math.floor((doneTodos / this.props.card.checkList.length) * 100))
    }



    handleChange = ({ target }, idx = -1) => {

        const field = target.name;
        const value = (field === 'isDone') ? target.done : target.value

        let clone = this.props.card.checkList.slice(); //creates the clone of the stat
        console.log('check list at handle change', clone);

        if (field === 'isDone')
            clone[idx].isDone = value;
        else {
            if (idx === -1)
                this.setState({ todoText: value })
            else clone[idx].txt = value;
        }
        console.log('check list before save', clone);

        this.handleSaveBoard(clone);
    }

    addTodo = () => {

        if (!this.state.todoText) {
            return
        }
        else {

            let newTodo = { txt: this.state.todoText, isDone: false }
            let clone = this.props.card.checkList.slice();
            clone.push(newTodo);
            this.handleSaveBoard(clone)
            this.setState({ todoText: '', onAdd: false })
        }
    }

    getPhaseByCardId = (id) => {
        const curPhase = this.props.board.phaseLists.filter(phase => phase.cards.find(card => card.id === id));
        return curPhase;

    }

    handleSaveBoard = (checklist) => {
        console.log('check list on handle save', checklist);

        let boardClone = JSON.parse(JSON.stringify(this.props.board));
        const cardId = this.props.card.id
        let currPhase = this.getPhaseByCardId(cardId)



        currPhase[0].cards.forEach(card => {
            if (card.id === this.props.card.id) {
                console.log('BEFORE: checklist ', checklist, 'card ', card);
                card.checkList = checklist;
                console.log('AFTER: checklist', checklist, 'card ', card);
            }
        })
        console.log('save board. board:', this.props.board);
        this.props.saveBoard(boardClone)
    }


    toggleAdd = () => {
        if (this.state.todoText)
            this.addTodo()
        this.setState(prevState => ({ onAdd: !prevState.onAdd }))
    }


    onDelete = (idx) => {

        let clone = this.props.checkList.slice();
        clone.splice(idx, 1);
        this.handleSaveBoard(clone)
    }



    render() {
        const { todoText, onAdd, isTitleShown } = this.state
        if (this.state.progress) {

            return (
                <div className="card-check-list">
                    <div className="check-list-header-container">

                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${this.state.progress}%` }} >{this.state.progress}</div>
                        </div>
                        {this.state.checkList.map((todo, idx) => <div key={idx} >
                            <input type="checkbox" onChange={(e) => this.handleChange(e, idx)} onBlur={this.handleSaveBoard} value={todo.txt} />
                            <input type="text" onChange={(e) => this.handleChange(e, idx)} onBlur={this.handleSaveBoard} value={todo.txt} />
                            <button onClick={() => this.onDelete(idx)}>X</button>
                        </div>)}

                        {!onAdd && <button onClick={this.toggleAdd}>Add Todo</button>}
                        {onAdd && <input type="text" onChange={this.handleChange}
                            autoFocus onBlur={this.toggleAdd} value={todoText} />}

                    </div>
                </div>
            )
        }
        else return 'loading'
    }
}


const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    loadBoard,
    saveBoard
}


export const CardCheckList = connect(mapStateToProps, mapDispatchToProps)(_CardCheckList)




// *******************************************************************************
