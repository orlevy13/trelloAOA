import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import { Link } from 'react-router-dom';
import { history } from '../history'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loadBoard, saveBoard } from '../store/actions/boardActions';

class _CardHeader extends Component {
    state = {
        txt: '',
        onPhase: '',
        isTitleOnEdit: false
    }



    // static propTypes = {
    //     prop: PropTypes
    // }

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
            this.props.saveBoard(boardClone)
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



    autoGrow = (el) => {
        // el.style.height = "5px";
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
                    <NoteOutlinedIcon />
                    {!isTitleOnEdit && <span><h2 className="card-title" onClick={this.toggleInput} >{txt}</h2></span>}
                    {(isTitleOnEdit) && <span><textarea ref={el => this.elTextarea = el}
                        onFocus={(ev) => { this.autoGrow(ev.target) }} className="card-title-input"
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
    saveBoard
}


export const CardHeader = connect(mapStateToProps, mapDispatchToProps)(_CardHeader)


