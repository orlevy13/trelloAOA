import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBoard } from '../store/actions/boardActions';
import { CardHeader } from './CardHeader';
import { CardDesc } from './CardDesc';
import CardSideBar from './CardSideBar';
import { CardCheckList } from './CardCheckList';

class _Card extends Component {
    state = {
        card: null
    }

    componentDidMount() {
        this.props.loadBoard(this.props.match.params.boardId)
            .then(() => {
                const card = this.getCardById()
                this.setState({ card })
            })
    }


    getCardById = () => {

        var cardId = this.props.match.params.cardId;
        if (!this.props.board)
            return;
        let boardClone = JSON.parse(JSON.stringify(this.props.board));

        var card;
        for (let i = 0; i < boardClone.phaseLists.length; i++) {
            const phase = boardClone.phaseLists[i];
            phase.cards.forEach(currCard => {
                if (currCard.id === cardId) {
                    card = JSON.parse(JSON.stringify(currCard));
                }
            });
        }
        return card;

    }



    hanleCardClick = (e) => {
        e.preventDefault()
    }

    render() {

        if (this.state.card) {

            const { card } = this.state
            return (
                <section>
                    <Link to="/board/abcd">
                        <div className="card-modal" >
                            <div className="card-container" onClick={this.hanleCardClick}>

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
                            </div>

                        </div>
                    </Link>
                </section>

            )
        } else return 'loading';
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