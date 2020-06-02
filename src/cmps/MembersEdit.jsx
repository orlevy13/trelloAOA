import React, { Component } from 'react';
import { Clear } from '@material-ui/icons';
import { queryUsers } from '../store/actions/userActions'
import { MemberEdit } from './MemberEdit';
import { boardService } from '../services/boardService';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';

export class _MembersEdit extends Component {

    state = {
        name: ''
    }

    async componentDidMount() {
        window.addEventListener('keydown', this.hideMembersEdit);
        if (!this.props.members) {
            await this.props.queryUsers();
        }

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideMembersEdit);
    }

    hideMembersEdit = (ev) => {
        if (ev.code === 'Escape') this.props.toggleProperty('isMembersEditShown', ev);
    }

    handleChange = ({ target }) => {
        this.setState({ name: target.value });
    }

    toggleMember = (member, ev) => {
        ev.stopPropagation();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        if (this.props.members) {
            const card = boardService.getCardById(boardCopy, this.props.card.id);
            if (card.assignedTo.some(mmbr => mmbr._id === member._id)) {
                card.assignedTo = card.assignedTo.filter(mmbr => mmbr._id !== member._id);
            } else card.assignedTo.push(member);
            const updatedBoard = boardService.replaceCardInBoard(boardCopy, card);
            this.props.updateBoard(updatedBoard);
        } else {
            if (boardCopy.members.some(mmbr => mmbr._id === member._id)) {
                boardCopy.members = boardCopy.members.filter(mmbr => mmbr._id !== member._id)
            } else (boardCopy.members.push(member));
            this.props.updateBoard(boardCopy);
        }

    }

    render() {
        const { members, toggleProperty, card, board } = this.props;
        const { name } = this.state;
        var membersToDisplay;
        var activeObject, activeObjectName;

        if (members) {
            //from card and exists in board
            activeObject = card;
            activeObjectName = 'card'
            membersToDisplay = members.filter(mmbr =>
                mmbr.fullName.toLowerCase().includes(name.toLowerCase()));
        }
        else {
            //from borard
            activeObject = board;
            activeObjectName = 'board'
            membersToDisplay = this.props.users.filter(mmbr =>
                mmbr.fullName.toLowerCase().includes(name.toLowerCase()));


        }
        if (!membersToDisplay) return ' '



        return (
            <section className="edit-members"  >
                <div className="edit-members-header flex align-center">
                    <p className="grow">Members</p>
                    <button onClick={(ev) => { toggleProperty('isMembersEditShown', ev) }}><Clear /></button>
                </div>
                <input className="search-name" onChange={this.handleChange} autoComplete="off"
                    type="search" name="name" value={name} placeholder="Search members" />
                <div className="members-gallery">
                    {membersToDisplay && membersToDisplay.map(member =>
                        <MemberEdit toggleMember={this.toggleMember} activeObject={activeObject}
                            activeObjectName={activeObjectName} key={member._id} member={member} />)}
                </div>

            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board,
        users: state.trelloUser.users
    }
}

const mapDispatchToProps = {
    updateBoard,
    queryUsers

}

export const MembersEdit = connect(mapStateToProps, mapDispatchToProps)(_MembersEdit)