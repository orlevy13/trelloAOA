import React, { Component } from 'react';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import { connect } from 'react-redux';
import { loadBoard, updateBoard, LOGGED_IN_USER } from '../store/actions/boardActions';
import { boardService, OPERETIONS, TYPES } from '../services/boardService'
import moment from 'moment';


class _CardAttachments extends Component {


    deleteAttachment = (idx, ev) => {
        ev.preventDefault();
        const boardCopy = boardService.getBoardCopy(this.props.board);
        const card = this.props.card;
        const cardId = card.id;
        const phaseIdx = this.getPhaseIdxByCardId(cardId);
        const cardIdx = boardCopy.phaseLists[phaseIdx].cards.findIndex(card => card.id === cardId);
        boardCopy.phaseLists[phaseIdx].cards[cardIdx].attachments.splice(idx, 1);
        boardService.addActivity(boardCopy, LOGGED_IN_USER, OPERETIONS.DELETE, TYPES.CARD, { id: cardId, title: card.title },
            `attachment to card`);
        this.props.updateBoard(boardCopy);
    }

    getPhaseIdxByCardId = (cardId) => {
        return this.props.board.phaseLists.findIndex(phase =>
            phase.cards.some(card => card.id === cardId))
    }
    render() {

        const { attachments } = this.props.card;

        return (
            (attachments && attachments.length > 0) && <section>
                <div className="desc-header-container flex">
                    <AttachFileOutlinedIcon className="icon" />
                    <span className="desc-header">Attachments</span>
                </div>
                <div className="flex column">
                    {attachments.map((attach, idx) => {
                        return <a href={attach.url} key={idx} className="attachment" target="_blank" rel="noopener noreferrer">
                            <div className="attachment flex">
                                <div className="attachment-thumbnail flex column justify-center align-center">
                                    <span className="">{attach.ext.toUpperCase()}</span>
                                </div>
                                <div className="flex column">
                                    <span className="attachment-name">{attach.name}</span>
                                    <span className="attach-time">Added {moment(attach.at).fromNow()}&nbsp;<span onClick={(ev) => this.deleteAttachment(idx, ev)} className="file-oper">Delete</span></span>
                                </div>
                            </div>
                        </a>

                    })}

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
    loadBoard,
    updateBoard
}


export const CardAttachments = connect(mapStateToProps, mapDispatchToProps)(_CardAttachments)
