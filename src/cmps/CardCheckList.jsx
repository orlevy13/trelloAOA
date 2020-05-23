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

        // path = "details/:boardId/:cardId"
        // const { boardId, cardId } = this.props.match.params;

        console.log('sett store board', this.props);
        this.setState({ checkList: this.props.card.checkList, onAdd: false },
            () => this.setState({ progress: this.progressBarUpdate() }))
    }


    progressBarUpdate = () => {

        const doneTodos = this.props.card.checkList.reduce((acc, currVal) => {
            console.log('progress bar update, checklist:', this.props.card.checkList, this.props.card.checkList.length);
            if (currVal.isDone) {
                acc++
                console.log('reduce func acc', acc, 'curr val is', currVal.isDone);
            }
            return acc
        }, 0)
        return (Math.floor((doneTodos / this.props.card.checkList.length) * 100))
    }


    // openInput = () => {
    //     console.log('open input');
    //     this.setState(prevState => ({ isShown: !prevState.isShown }))
    // }

    handleChange = ({ target }, idx = -1) => {
        console.log('check list handle change-value', target, idx, 'state todotext', this.state.todoText);
        const field = target.name;
        const value = (field === 'isDone') ? target.done : target.value
        console.log('before clone', this.props.board);


        let clone = this.props.card.checkList.slice(); //creates the clone of the state
        console.log('handle change. clone:', clone, 'field:', field, 'value:', value);
        if (field === 'isDone')
            clone[idx].isDone = value;
        else {
            if (idx === -1)
                this.setState({ todoText: value })
            else clone[idx].txt = value;
        }
        this.handleSaveBoard(clone);
    }

    addTodo = () => {
        console.log('handle add hi');
        if (!this.state.todoText) {
            console.log('handle add failed');
            return
        }
        else {
            console.log('handle add');

            let newTodo = { txt: this.state.todoText, isDone: false }
            let clone = this.props.card.checkList.slice();
            clone.push(newTodo);
            this.handleSaveBoard(clone)
            this.setState({ todoText: '', onAdd: false })
        }
    }



    handleSaveBoard = (checklist) => {
        let boardClone = JSON.parse(JSON.stringify(this.props.board));
        const cardId = this.props.card.id
        console.log('handle save board card id:', cardId, 'board clone phaselists', boardClone.phaseLists);

        let checklistClone = boardClone.phaseLists.forEach(phase =>
            phase.cards.filter(card => card.id = cardId))

        console.log('save board checlist', checklistClone);
        boardClone.checkList = checklistClone;
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
            console.log('props checklist', this.props.checkList);

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
