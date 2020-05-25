import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import { history } from '../history'
import { connect } from 'react-redux';
import { loadBoard, updateBoard } from '../store/actions/boardActions';

class _CardHeader extends Component {
    state = {
        txt: '',
        onPhase: '',
        isTitleOnEdit: false
    }

    componentDidMount() {
        const cardId = this.props.card.id;
        let currPhase = this.props.board.phaseLists.filter(phase =>
            phase.cards.find(card => card.id === cardId));


        this.setState({ txt: this.props.card.title, onPhase: currPhase[0].name })
    }

    toggleInput = () => {

        this.setState(prevState => ({ isTitleOnEdit: !prevState.isTitleOnEdit }))
    }


    handleSaveBoard = () => {

        if (this.state.isTitleOnEdit) {
            let boardClone = JSON.parse(JSON.stringify(this.props.board));
            const cardId = this.props.card.id;
            let currPhase = boardClone.phaseLists.filter(phase => phase.cards.find(card => card.id === cardId));

            currPhase[0].cards.forEach(card => {
                if (card.id === this.props.card.id) {
                    card.title = this.state.txt;
                }
            })
            this.props.updateBoard(boardClone)
                .then(() => {

                    this.toggleInput();
                })
        }
    }

    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ txt: value })
        this.autoGrow(this.elTextarea)
    }

    handleKeyPress(e) {
        if (e.keyCode === 13) {
            e.target.blur();
            //Write you validation logic here
        }
    }




    autoGrow = (el) => {
        el.style.height = (el.scrollHeight) + "px";
    }

    backToboard = () => {
        history.push(`/board/${this.props.board._id}`)
    }

    render() {
        const { txt, isTitleOnEdit, onPhase } = this.state;
        if (this.state) {

            return (<div>
                <div className="card-header-container">
                    <NoteOutlinedIcon className="checklist-header-icon" />
                    {!isTitleOnEdit && <span><h2 className="card-title" onClick={this.toggleInput} >{txt}</h2></span>}
                    {(isTitleOnEdit) && <span><textarea ref={el => this.elTextarea = el} spellCheck="false"
                        onFocus={(ev) => { this.autoGrow(ev.target) }} onKeyDown={(e) => this.handleKeyPress(e)} className="card-title-input"
                        autoFocus onBlur={this.handleSaveBoard} placeholder="Title..." autoCorrect="false"
                        onChange={this.handleChange} value={txt} ></textarea></span>}
                </div>
                <p className="card-link">in list <span onClick={this.backToboard}>{onPhase}</span></p>
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
    updateBoard
}


export const CardHeader = connect(mapStateToProps, mapDispatchToProps)(_CardHeader)


