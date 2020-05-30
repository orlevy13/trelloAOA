import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';
import {
    DeleteForeverOutlined, AccessTime,
    PersonOutlineOutlined, LabelOutlined
} from '@material-ui/icons';
import { LabelsEdit } from './LabelsEdit';
import { MembersEdit } from './MembersEdit';
import { DueDateEdit } from './DueDateEdit';

export class _CardMenu extends Component {

    state = {
        card: {
            title: '',
            dueDate: 0,
            labels: [],
            assignedTo: []
        },
        isLabelEditShown: false,
        isMembersEditShown: false,
        isDueDateEditShown: false
    }

    componentDidMount() {
        window.addEventListener('keydown', this.hideMenu);
        this.titleInput.addEventListener("keypress", this.submitOnEnter);
        const { title, dueDate, labels, assignedTo } = this.props.card;
        this.setState({ card: { title, dueDate, labels, assignedTo } });
        this.cardMenu.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideMenu);
        this.titleInput.removeEventListener("keypress", this.submitOnEnter);
    }

    handleChange = ({ target }) => {
        this.setState({ card: { title: target.value } });
    }

    submitOnEnter(ev) {
        // this allows Shift+Enter = new line, Enter = submit form
        if (ev.which === 13 && !ev.shiftKey) {
            ev.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
            ev.preventDefault();
        }
    }

    hideMenu = (ev) => {
        const { isLabelEditShown, isMembersEditShown, isDueDateEditShown } = this.state;
        if (ev.code === 'Escape' && !isLabelEditShown
            && !isMembersEditShown && !isDueDateEditShown
        ) this.props.toggleIsMenuShown();
    }

    getPhaseIdxByCardId = (cardId) => {
        return this.props.board.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId))
    }

    onDelete = () => {
        const { id } = this.props.card;//getting the id and boardCopy
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const phaseIdx = this.getPhaseIdxByCardId(id);
        //getting the phaseIdx to edit his cards

        boardCopy.phaseLists[phaseIdx].cards =
            boardCopy.phaseLists[phaseIdx].cards.filter(card => card.id !== id);
        //filtering out the deleted card
        this.props.updateBoard(boardCopy);
        this.props.toggleIsMenuShown();//Closing the menu
    }

    onChangeTitle = () => {
        if (!this.state.card.title.trim()) return;
        const { id } = this.props.card;
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const phaseIdx = this.getPhaseIdxByCardId(id);
        //Getting access to the card inside the board

        boardCopy.phaseLists[phaseIdx].cards.filter(card => {
            if (card.id !== id) return card;
            else {
                card.title = this.state.card.title;
                return card;
            }
        });
        this.props.updateBoard(boardCopy);
        this.props.toggleIsMenuShown();//Closing the menu
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

    toggleProperty = property => {
        this.setState(prevState => ({ [property]: !prevState[property] }));
    }

    render() {
        const { onDelete, handleChange, onChangeTitle, toggleProperty, changeDueDate } = this;
        const { isLabelEditShown, card, isMembersEditShown, isDueDateEditShown } = this.state;
        const { title } = card;
        return (
            <section>
                <div onMouseDown={this.props.toggleIsMenuShown} className="screen"></div>
                <section className="menu-container flex">

                    <form onSubmit={onChangeTitle} className="edit-card-form flex column">
                        <textarea onChange={handleChange} name="title" value={title} cols="30" rows="5"
                            ref={el => this.titleInput = el} spellCheck="false" autoComplete="off" autoFocus />
                        <button onClick={onChangeTitle} className="save-btn">Save</button>
                    </form>

                    <div ref={(el) => this.cardMenu = el} className="card-menu flex column">
                        <button onClick={() => { toggleProperty('isLabelEditShown') }} className="flex align-center">
                            <LabelOutlined className="icon" />Edit Labels</button>
                        {isLabelEditShown &&
                            <LabelsEdit card={this.props.card} toggleProperty={toggleProperty} />}

                        <button onClick={() => { toggleProperty('isMembersEditShown') }} className="flex align-center">
                            <PersonOutlineOutlined className="icon" />Change Members</button>
                        {isMembersEditShown && <MembersEdit card={this.props.card}
                            members={this.props.board.members}
                            toggleProperty={toggleProperty} />}

                        <button onClick={() => { toggleProperty('isDueDateEditShown') }}
                            className="flex align-center">
                            <AccessTime className="icon" />Change Due Date</button>
                        {isDueDateEditShown && <DueDateEdit changeDueDate={changeDueDate}
                            toggleProperty={toggleProperty} />}

                        <button onClick={onDelete} className="flex align-center">
                            <DeleteForeverOutlined className="icon" />Delete</button>
                    </div>

                </section>
            </section >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        board: state.trelloApp.board
    }
}

const mapDispatchToProps = {
    updateBoard
}

export const CardMenu = connect(mapStateToProps, mapDispatchToProps)(_CardMenu)