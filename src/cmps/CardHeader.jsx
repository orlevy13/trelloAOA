import React, { Component } from 'react'
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
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
        this.setState({ txt: this.props.card.title, onPhase: this.props.card.onPhase })
    }

    toggleInput = () => {

        this.setState(prevState => ({ isTitleOnEdit: !prevState.isTitleOnEdit }))
    }


    handleSaveBoard = () => {
        console.log('state', this.state);

        if (this.state.isTitleOnEdit) {
            console.log('handle save');
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

                    console.log('board after save', this.props.board);
                    this.toggleInput();
                })

        }

    }

    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ txt: value })
    }

    render() {
        const { txt, isTitleOnEdit, onPhase } = this.state;

        if (this.state)
            return (
                <div>

                    <div className="card-header-container">
                        <NoteOutlinedIcon />
                        {!isTitleOnEdit && <span><h2 className="card-title" onClick={this.toggleInput} >{txt}</h2></span>}
                        {(isTitleOnEdit) && <span><textarea className="card-title-input" autoFocus onBlur={this.handleSaveBoard} placeholder="Title..."
                            onChange={this.handleChange} value={txt} ></textarea></span>}
                    </div>
                    <p className="card-link">in list <a href="#" >{onPhase}</a></p>
                </div>
            )
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


