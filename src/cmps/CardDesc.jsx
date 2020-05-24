import React, { Component } from 'react'
import DescriptionIcon from '@material-ui/icons/Description';
import { connect } from 'react-redux';
import { loadBoard, saveBoard } from '../store/actions/boardActions';

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
    }


    handleSaveBoard = () => {
        console.log('state', this.state);


        console.log('handle save');
        let boardClone = JSON.parse(JSON.stringify(this.props.board));
        const cardId = this.props.card.id;
        let currPhase = boardClone.phaseLists.filter(phase => phase.cards.find(card => card.id === cardId));

        currPhase[0].cards.forEach(card => {
            if (card.id === this.props.card.id) {
                card.desc = this.state.txt;
            }
        })
        this.props.saveBoard(boardClone)
            .then(() => console.log('board after save', this.props.board))



    }

    render() {

        if (this.state.txt) {
            return (
                <section>
                    <div className="desc-header-container">
                        <DescriptionIcon /><span className="desc-header">Description</span>
                    </div>
                    <div className="card-desc-container">
                        <textarea className="card-desc-input" placeholder="Add a more detailed description..."
                            onChange={this.handleChange} onBlur={this.handleSaveBoard} value={this.state.txt}></textarea>
                    </div>
                </section>
            )
        } else return ''
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


export const CardDesc = connect(mapStateToProps, mapDispatchToProps)(_CardDesc)


