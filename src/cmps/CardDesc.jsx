import React, { Component } from 'react'
import DescriptionIcon from '@material-ui/icons/Description';
import { connect } from 'react-redux';
import { loadBoard, updateBoard } from '../store/actions/boardActions';

class _CardDesc extends Component {
    state = {
        txt: ''
    }

    componentDidMount() {
        this.setState({ txt: this.props.card.desc })
    }

    handleChange = ({ target }) => {
        var value = target.value
        this.setState({ txt: value })
        this.autoGrow(this.elTextarea)
    }


    handleSaveBoard = () => {
        let boardClone = JSON.parse(JSON.stringify(this.props.board));
        const cardId = this.props.card.id;
        let currPhase = boardClone.phaseLists.filter(phase => phase.cards.find(card => card.id === cardId));

        currPhase[0].cards.forEach(card => {
            if (card.id === this.props.card.id) {
                card.desc = this.state.txt;
            }
        })
        this.props.updateBoard(boardClone);
    }

    autoGrow = (el) => {
        el.style.height = (el.scrollHeight) + "px";
    }


    render() {
        return (
            <section>
                <div className="desc-header-container">
                    <DescriptionIcon className="card-desc-icon" /><span className="desc-header">Description</span>
                </div>
                <div className="card-desc-container">
                    <textarea className="card-desc-input" ref={el => this.elTextarea = el}
                        placeholder="Add a more detailed description..." onChange={this.handleChange}
                        onFocus={(ev) => { this.autoGrow(ev.target) }} autoCorrect="false"
                        onBlur={this.handleSaveBoard} value={this.state.txt}></textarea>
                </div>
            </section>
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


export const CardDesc = connect(mapStateToProps, mapDispatchToProps)(_CardDesc)


