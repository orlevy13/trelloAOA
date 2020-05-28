import React, { Component } from 'react';
import { Clear } from '@material-ui/icons';
import { MemberEdit } from './MemberEdit';
import { boardService } from '../services/boardService';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';

export class _MembersEdit extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        window.addEventListener('keydown', this.hideMembersEdit);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideMembersEdit);
    }

    hideMembersEdit = (ev) => {
        if (ev.code === 'Escape') this.props.toggleProperty('isMembersEditShown');
    }

    handleChange = ({ target }) => {
        this.setState({ name: target.value });
    }

    toggleMemberOnCard = (member) => {
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const cardId = this.props.card.id;

        // Getting the access to the card members inside the board
        const phaseIdx = boardCopy.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId)
        )
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        const card = boardCopy.phaseLists[phaseIdx].cards[cardIdx];

        //Checking if the member is assigned or not and flip it
        if (card.assignedTo.some(mmbr => mmbr._id === member._id)) {
            card.assignedTo = card.assignedTo.filter(mmbr => mmbr._id !== member._id);
        } else card.assignedTo.push(member);

        boardCopy.phaseLists[phaseIdx].cards[cardIdx] = card;
        this.props.updateBoard(boardCopy);
    }

    render() {
        const { members, toggleProperty, card } = this.props;
        const { name } = this.state;
        const membersToDisplay = members.filter(mmbr =>
            mmbr.fullName.toLowerCase().includes(name.toLowerCase()));
        return (
            <section className="edit-members">
                <div className="edit-members-header flex align-center">
                    <p className="grow">Members</p>
                    <button onClick={() => { toggleProperty('isMembersEditShown') }}><Clear /></button>
                </div>
                <input className="search-name" onChange={this.handleChange} autoComplete="off"
                    type="search" name="name" value={name} placeholder="Search members" />
                <div className="members-gallery">
                    {members && membersToDisplay.map(member =>
                        <MemberEdit toggleMemberOnCard={this.toggleMemberOnCard} card={card}
                            key={member._id} member={member} />)}
                </div>

            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    updateBoard,
}

export const MembersEdit = connect(mapStateToProps, mapDispatchToProps)(_MembersEdit)