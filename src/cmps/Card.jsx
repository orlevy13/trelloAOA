import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardHeader from './CardHeader'
import CardDesc from './CardDesc';
import CardSideBar from './CardSideBar'
import CardCheckList from './CardCheckList'
// import boardService from '../services/boardService'
import { cardService } from '../services/cardService'
import { ListItemSecondaryAction } from '@material-ui/core';

class _Card extends Component {
    state = {
        card: null
    }

    componentDidMount() {
        this.getCardById('vfdbfb fds bnfsda njbas')
            .then(card => this.setState({ card }))

    }

    getCardById = (id) => {

        return cardService.getById(id)
        // const id = this.props.match.params.id;
    }

    render() {

        if (this.state.card) {
            console.log('card in card', this.state.card);

            return (


                <section className="card-container">

                    <div className="card-header">
                        < CardHeader card={this.state.card} />
                    </div>
                    <div className="main-col">
                        < CardDesc card={this.state.card} />
                        < CardCheckList card={this.state.card} />
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

}

export const Card = connect(mapStateToProps, mapDispatchToProps)(_Card)