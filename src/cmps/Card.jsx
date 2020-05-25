import React, { Component } from 'react';
import { history } from '../history'
import { connect } from 'react-redux';
import { loadBoard } from '../store/actions/boardActions';
import { CardHeader } from './CardHeader';
import { CardDesc } from './CardDesc';
import { CardCheckList } from './CardCheckList';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LabelIcon from '@material-ui/icons/Label';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

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

    componentDidUpdate(prevProps, prevState) {

        if (JSON.stringify(prevProps.board) !== JSON.stringify(this.props.board)) {

            this.props.loadBoard(this.props.match.params.boardId)
                .then(() => {
                    const card = this.getCardById()
                    this.setState({ card })
                })
        }
    }

    addCheckList = () => {
        const cloneCard = JSON.parse(JSON.stringify(this.state.card));
        if (!cloneCard.checkList.length) {
            cloneCard.checkList.push({ txt: '', isDone: false });
            this.setState({ card: cloneCard })
        }
    }


    getCardById = (cardId = null) => {
        if (!cardId)
            cardId = this.props.match.params.cardId;
        if (!this.props.board)
            return;
        let boardClone = JSON.parse(JSON.stringify(this.props.board));

        var card;
        for (let i = 0; i < boardClone.phaseLists.length; i++) {
            const phase = boardClone.phaseLists[i];
            phase.cards.forEach(currCard => {
                if (currCard.id === cardId) {
                    card = currCard;
                }
            });
        }
        return card;

    }


    hanleCardClick = (e) => {
        e.stopPropagation()
    }

    render() {
        if (!this.props.board || !this.state.card) return 'Loading'
        const { card } = this.state
        return (
            <section >
                {/* <Link to="/board/abcd">
                        <div className="card-modal" ></div></Link> */}
                <button onMouseDown={() => { history.push('/board/abcd') }}>
                    <div className="card-modal" ></div></button>
                <div className="card-container" >

                    <div className="card-header">
                        < CardHeader card={card} />
                    </div>
                    <div className="main-col">
                        < CardDesc card={card} />
                        {(card.checkList.length > 0) && < CardCheckList card={card} />}
                    </div>
                    <div className="card-side-bar">
                        <section>
                            <div className="card-sidebar">
                                <button className="card-sidebar-btn"><span ><PermIdentityIcon /></span> Member</button>
                                <button className="card-sidebar-btn"><span ><LabelIcon /></span>Labels</button>
                                {(this.state.card.checkList.length < 1) && <button className="card-sidebar-btn"
                                    onClick={this.addCheckList}><span ><PlaylistAddCheckIcon /></span>Checklist</button>}
                                <button className="card-sidebar-btn"><span ><ScheduleIcon /></span>Due Date</button>
                                <button className="card-sidebar-btn"><span ><AttachmentIcon /></span>Attachment</button>
                                <button className="card-sidebar-btn"><span ><CropOriginalIcon /></span>Cover</button>
                            </div>
                        </section>
                    </div>
                </div>
            </section >
        )
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