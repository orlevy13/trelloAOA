import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoard } from '../store/actions/boardActions';
import CardHeader from './CardHeader'
import CardDesc from './CardDesc';
import CardSideBar from './CardSideBar'
import { CardCheckList } from './CardCheckList'
// import boardService from '../services/boardService'
import { boardService } from '../services/boardService'
import { ListItemSecondaryAction } from '@material-ui/core';

class _Card extends Component {
    state = {
        card: null
    }

    componentDidMount() {
        // const { boardId, phaseId, cardId } = this.props.match.params;
        // const currPhase = this.props.board.phaseLists.filter(phase => phase.id === phaseId)
        // const currCard = currPhase.cards.filter(card => card.id === cardId)
        this.props.loadBoard(this.props.match.params.boardId)
            .then(() => {
                console.log('board after load board', this.props);
                const card = this.getCardById()
                this.setState({ card })
            })
    }


    getCardById = () => {
        console.log(this.props.match.params);
        var cardId = this.props.match.params.cardId;
        if (!this.props.board)
            return
        console.log('card id:', cardId);
        let boardClone = JSON.parse(JSON.stringify(this.props.board));

        console.log('board in get card by id', boardClone);

        var card;
        for (let i = 0; i < boardClone.phaseLists.length; i++) {
            const phase = boardClone.phaseLists[i];
            phase.cards.forEach(currCard => {
                if (currCard.id === cardId) card = currCard;
            });
        }

        console.log(card);


        return card;
    }



    render() {

        if (this.state.card) {
            console.log('card in card', this.state.card);
            const { card } = this.state
            return (


                <section className="card-container">

                    <div className="card-header">
                        < CardHeader card={card} />
                    </div>
                    <div className="main-col">
                        < CardDesc card={card} />
                        {(card.checkList.length > 0) && < CardCheckList card={card} />}
                    </div>
                    <div className="card-side-bar">
                        < CardSideBar />
                    </div>
                </section>

            )
        } else return ('loading')
    }
}



const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    loadBoard
}

export const Card = connect(mapStateToProps, mapDispatchToProps)(_Card)