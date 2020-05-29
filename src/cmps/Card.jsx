import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBoard, setCard, updateBoard } from '../store/actions/boardActions';
import { CardHeader } from './CardHeader';
import { CardDesc } from './CardDesc';
import { CardChecklist } from './CardChecklist';
import { Activities } from '../cmps/Activities'
import {
    PermIdentity, LabelOutlined, PlaylistAddCheck,
    Schedule, Attachment, CropOriginal, Clear, DeleteForeverOutlined
} from '@material-ui/icons';
import { LabelsEdit } from './LabelsEdit';
import { MembersEdit } from './MembersEdit';
import { MemberInitials } from './MemberInitials';
import { boardService } from '../services/boardService';
import { DueDateEdit } from './DueDateEdit';
import moment from 'moment';


class _Card extends Component {
    state = {
        card: null,
        isLabelEditShown: false,
        isMembersEditShown: false,
        cardActivities: [],
        isDueDateEditShown: false
    }

    componentDidMount() {
        window.addEventListener('keydown', this.hideCard);
        var card;
        this.props.board.phaseLists.forEach(phase => {
            const res = phase.cards.find(card => card.id === this.props.cardId);
            if (res) card = res;
        });
        const cardActivities = this.getActivities(card.id);
        this.setState({ card, cardActivities });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideCard);
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

    getUpdatedLabels = () => {
        const { labels } = this.state.card;
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const updatedLabels = labels.map(label => {
            //get the correct labels from board
            const foundLabel = boardCopy.labels.find(boardLabel => boardLabel.id === label.id);
            if (foundLabel) return foundLabel;
        })
        return updatedLabels;
    }

    hideCard = (ev) => {
        const { isLabelEditShown, isMembersEditShown, isDueDateEditShown } = this.state;
        if (ev.code === 'Escape' && !isLabelEditShown
            && !isMembersEditShown && !isDueDateEditShown
        ) this.props.setCard(null);
    }


    toggleProperty = property => {
        this.setState(prevState => ({ [property]: !prevState[property] }));
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

    getPhaseIdxByCardId = (cardId) => {
        return this.props.board.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId))
    }


    removeMemberFromCard = (member) => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;

        // Getting the access to the card members inside the board
        const phaseIdx = this.getPhaseIdxByCardId(cardId);
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        const card = boardCopy.phaseLists[phaseIdx].cards[cardIdx];

        //Removing the member from the card
        card.assignedTo = card.assignedTo.filter(mmbr => mmbr._id !== member._id);
        boardCopy.phaseLists[phaseIdx].cards[cardIdx] = card;
        this.props.updateBoard(boardCopy);
    }

    changeDueDate = newDate => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;
        const phaseIdx = this.getPhaseIdxByCardId(cardId);
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        //Getting access to the card inside the board

        boardCopy.phaseLists[phaseIdx].cards[cardIdx].dueDate = newDate;
        this.props.updateBoard(boardCopy);
    }

    removeImgUrl = () => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;
        const phaseIdx = this.getPhaseIdxByCardId(cardId);
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        //Getting access to the card inside the board

        boardCopy.phaseLists[phaseIdx].cards[cardIdx].imgUrl = null;
        this.props.updateBoard(boardCopy);
    }

    render() {
        if (!this.props.board || !this.state.card) return 'Loading';
        const { card, isLabelEditShown, isMembersEditShown, cardActivities, isDueDateEditShown } = this.state;
        const { assignedTo, dueDate, imgUrl, title } = card;
        const { toggleProperty, changeDueDate, removeImgUrl } = this;
        const labels = this.getUpdatedLabels();

        return (
            <section>
                <div onClick={() => { this.props.setCard(null) }} className="card-modal" >
                    <div onClick={(ev) => ev.stopPropagation()} className="card-container" >
                        {imgUrl && <div className="card-img-container flex justify-center">
                            <img className="card-img" src={imgUrl} alt={title} />
                            <button className="remove-btn flex align-center"
                                title="Remove cover image" onClick={removeImgUrl}>
                                <DeleteForeverOutlined className="icon" /></button>
                        </div>}
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
                                            onClick={() => { toggleProperty('isLabelEditShown') }}
                                            style={{ backgroundColor: label.color }}
                                            key={label.id}> <span className="label-txt">{label.txt}</span>
                                        </span>)}
                                    </div>
                                </div>}

                                {dueDate && <div className="card-details-date">
                                    <h3>Due Date</h3>
                                    <div onClick={() => { toggleProperty('isDueDateEditShown') }}
                                        className="date flex align-center">
                                        <span className="date-str">{`${moment(dueDate).format("MMM Do")}
                                     at ${moment(dueDate).format("HH:mm")}`}</span>
                                    </div>
                                </div>}
                                < CardDesc card={card} />
                                {(card.checkList.length > 0) && < CardChecklist card={card} />}
                                <Activities card={card} showCommentBox={true} activities={cardActivities} />
                            </div>
                            <div className="card-sidebar">
                                <button onClick={() => { toggleProperty('isMembersEditShown') }}
                                    className="card-sidebar-btn"><span>
                                        <PermIdentity className="icon" /></span>Members</button>
                                {isMembersEditShown &&
                                    <MembersEdit members={this.props.board.members} card={card}
                                        toggleProperty={toggleProperty} />}

                                <button onClick={() => { toggleProperty('isLabelEditShown') }} className="card-sidebar-btn">
                                    <span ><LabelOutlined className="icon" /></span>Labels</button>

                                {isLabelEditShown &&
                                    <LabelsEdit card={card} toggleProperty={toggleProperty} />}

                                {(card.checkList.length < 1) && <button className="card-sidebar-btn"
                                    onClick={this.addCheckList}><span>
                                        <PlaylistAddCheck className="icon" /></span>Checklist</button>}

                                <button onClick={() => { toggleProperty('isDueDateEditShown') }}
                                    className="card-sidebar-btn"><span>
                                        <Schedule className="icon" /></span>Due Date</button>
                                {isDueDateEditShown && <DueDateEdit changeDueDate={changeDueDate}
                                    toggleProperty={toggleProperty} />}

                                <button className="card-sidebar-btn"><span>
                                    <Attachment className="icon" /></span>Attachment</button>

                                {!imgUrl && <button className="card-sidebar-btn"><span>
                                    <CropOriginal className="icon" /></span>Cover</button>}
                            </div>
                        </div>
                    </div></div>
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