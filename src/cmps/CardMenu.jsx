import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBoard } from '../store/actions/boardActions';
import { boardService } from '../services/boardService';
import {
    DeleteForeverOutlined, AccessTime, ArrowForwardOutlined,
    PersonOutlineOutlined, LabelOutlined
} from '@material-ui/icons';

export class _CardMenu extends Component {

    state = {
        title: '',
        dueDate: 0,
        labels: [],
        assignedTo: []
    }

    componentDidMount() {
        window.addEventListener('keydown', this.hideMenu);
        this.titleInput.addEventListener("keypress", this.submitOnEnter);
        const { title, dueDate, labels, assignedTo } = this.props.card;
        this.setState({ title, dueDate, labels, assignedTo });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hideMenu);
        this.titleInput.removeEventListener("keypress", this.submitOnEnter);
    }

    handleChange = ({ target }) => {
        this.setState({ title: target.value })
    }

    submitOnEnter(ev) {
        // this allows Shift+Enter = new line, Enter = submit form
        if (ev.which === 13 && !ev.shiftKey) {
            ev.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
            ev.preventDefault();
        }
    }

    hideMenu = (ev) => {
        if (ev.code === 'Escape') this.props.toggleIsMenuShown();
    }

    onDelete = () => {
        const { id } = this.props.card;//getting the id and boardCopy
        const boardCopy = boardService.getBoardCopy(this.props.board);

        const phaseIdx = boardCopy.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === id)
        )//getting the phaseIdx to edit his cards
        boardCopy.phaseLists[phaseIdx].cards =
            boardCopy.phaseLists[phaseIdx].cards.filter(card => card.id !== id);
        //filtering out the deleted card
        this.props.saveBoard(boardCopy);
        this.props.toggleIsMenuShown();//Closing the menu
    }

    onChangeTitle = () => {
        if (!this.state.title.trim()) return;
        const { id } = this.props.card;//getting the id and boardCopy
        const boardCopy = boardService.getBoardCopy(this.props.board);

        const phaseIdx = boardCopy.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === id)
        )//getting the phaseIdx to edit his cards

        boardCopy.phaseLists[phaseIdx].cards.filter(card => {
            if (card.id !== id) return card;
            else {
                card.title = this.state.title;
                return card;
            }
        });
        this.props.saveBoard(boardCopy);
        this.props.toggleIsMenuShown();//Closing the menu
    }

    render() {
        const { onDelete, handleChange, onChangeTitle } = this;
        const { clientX, clientY } = this.props;
        const { title } = this.state;
        return (
            <section>
                <div onMouseDown={this.props.toggleIsMenuShown} className="screen"></div>
                <section style={{ top: clientY - 105, left: clientX - 220 }}
                    onClick={(ev) => ev.preventDefault()} className="menu-container flex">

                    <form onSubmit={onChangeTitle} className="edit-card-form flex column">
                        <textarea onChange={handleChange} name="title" value={title} cols="30" rows="5"
                            ref={el => this.titleInput = el} spellCheck="false" autoComplete="off" autoFocus />
                        <button onClick={onChangeTitle} className="save-btn">Save</button>
                    </form>

                    <div className="card-menu flex column">
                        <button className="flex align-center">
                            <LabelOutlined className="icon" />Edit Labels</button>
                        <button className="flex align-center">
                            <PersonOutlineOutlined className="icon" />Change Members</button>
                        <button className="flex align-center">
                            <ArrowForwardOutlined className="icon" />Move</button>
                        <button className="flex align-center">
                            <AccessTime className="icon" />Change Due Date</button>
                        <button onClick={onDelete} className="flex align-center">
                            <DeleteForeverOutlined className="icon" />Delete</button>
                    </div>

                </section>
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
    saveBoard
}

export const CardMenu = connect(mapStateToProps, mapDispatchToProps)(_CardMenu)