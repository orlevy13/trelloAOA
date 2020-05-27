import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoard, setCard, updateBoard } from '../store/actions/boardActions';
import { CardHeader } from './CardHeader';
import { CardDesc } from './CardDesc';
import { CardChecklist } from './CardChecklist';
import { Activities } from '../cmps/Activities'
import {
    PermIdentity, LabelOutlined, PlaylistAddCheck,
    Schedule, Attachment, CropOriginal
} from '@material-ui/icons';
import { LabelsEdit } from './LabelsEdit';
import { MembersEdit } from './MembersEdit';
import { MemberInitials } from './MemberInitials';
import { boardService } from '../services/boardService';
import socketService from '../services/SocketService'


class _Card extends Component {
    state = {
        card: null,
        isLabelEditShown: false,
        isMembersEditShown: false,
        cardActivities: []
    }

    componentDidMount() {

        var card;
        this.props.board.phaseLists.forEach(phase => {
            const res = phase.cards.find(card => card.id === this.props.cardId);
            if (res) card = res;
        });
        const cardActivities = this.getActivities(card.id);
        this.setState({ card, cardActivities });
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.board) !== JSON.stringify(this.props.board)) {
            var card;
            this.props.board.phaseLists.forEach(phase => {
                const res = phase.cards.find(card => card.id === this.props.cardId);
                if (res) card = res;
            });
            const cardActivities = this.getActivities(card.id);
            this.setState({ card, cardActivities });
        }
    }

    getActivities = (cardId, limit = 10) => {
        const cardActivities = this.props.board.activities.filter(activity => activity.object.id === cardId);
        if (cardActivities.length > 10) return cardActivities.slice(0, limit);
        return cardActivities


    }

    addCheckList = () => {
        const cloneCard = JSON.parse(JSON.stringify(this.state.card));
        if (!cloneCard.checkList.length) {
            cloneCard.checkList.push({ txt: '', isDone: false });
            this.setState({ card: cloneCard })
        }
    }

    toggleIsLabelEditShown = () => {
        this.setState(prevState => ({ isLabelEditShown: !prevState.isLabelEditShown }));
    }

    toggleIsMembersEditShown = () => {
        this.setState(prevState => ({ isMembersEditShown: !prevState.isMembersEditShown }));
    }


    removeMemberFromCard = (member) => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;

        // Getting the access to the card members inside the board
        const phaseIdx = boardCopy.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId)
        )
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        const card = boardCopy.phaseLists[phaseIdx].cards[cardIdx];

        //Removing the member from the card
        card.assignedTo = card.assignedTo.filter(mmbr => mmbr._id !== member._id);
        boardCopy.phaseLists[phaseIdx].cards[cardIdx] = card;
        this.props.updateBoard(boardCopy);
    }

    render() {
        if (!this.props.board || !this.state.card) return 'Loading';
        const { card, isLabelEditShown, isMembersEditShown, cardActivities } = this.state;
        const { assignedTo, labels } = card;

        return (
            <section>
                <div onMouseDown={() => { this.props.setCard(null) }} className="card-modal" ></div>
                <div className="card-container" >
                    < CardHeader card={card} />
                    <div className="card-content flex">
                        <div className="card-details flex column grow">
                            {assignedTo.length > 0 && <div className="card-details-members">
                                <h3>Members</h3>
                                <div className="flex align-center">
                                    {assignedTo.map((member) => <span key={member._id}
                                        onClick={() => { this.removeMemberFromCard(member) }}>
                                        <MemberInitials member={member} />
                                    </span>)}
                                </div>
                            </div>}

                            {labels.length > 0 && <div className="card-details-labels">
                                <h3>Labels</h3>
                                <div className="labels-gallery flex wrap align-center">
                                    {labels.map(label => <span title={label.txt} className="label"
                                        onClick={this.toggleIsLabelEditShown}
                                        style={{ backgroundColor: label.color }}
                                        key={label.id}> <span className="label-txt">{label.txt}</span>
                                    </span>)}
                                </div>
                            </div>}

                            < CardDesc card={card} />
                            {(card.checkList.length > 0) && < CardChecklist card={card} />}
                            <Activities card={card} showCommentBox={true} activities={cardActivities} />
                        </div>
                        <div className="card-sidebar">
                            <button onClick={this.toggleIsMembersEditShown}
                                className="card-sidebar-btn"><span>
                                    <PermIdentity className="icon" /></span>Members</button>
                            {isMembersEditShown &&
                                <MembersEdit members={this.props.board.members} card={card}
                                    toggleIsMembersEditShown={this.toggleIsMembersEditShown} />}

                            <button onClick={this.toggleIsLabelEditShown} className="card-sidebar-btn">
                                <span ><LabelOutlined className="icon" /></span>Labels</button>

                            {isLabelEditShown &&
                                <LabelsEdit card={card} toggleIsLabelEditShown={this.toggleIsLabelEditShown} />}

                            {(card.checkList.length < 1) && <button className="card-sidebar-btn"
                                onClick={this.addCheckList}><span>
                                    <PlaylistAddCheck className="icon" /></span>Checklist</button>}

                            <button className="card-sidebar-btn"><span>
                                <Schedule className="icon" /></span>Due Date</button>
                            <button className="card-sidebar-btn"><span>
                                <Attachment className="icon" /></span>Attachment</button>
                            <button className="card-sidebar-btn"><span>
                                <CropOriginal className="icon" /></span>Cover</button>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
        card: state.trelloApp.card
    }
}

const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    setCard
}

export const Card = connect(mapStateToProps, mapDispatchToProps)(_Card)