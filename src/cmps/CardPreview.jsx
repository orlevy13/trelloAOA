import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardLabels } from './CardLabels';
import { AttachmentOutlined, CheckBoxOutlined, CreateOutlined } from '@material-ui/icons';
import { loadBoard, setCard } from '../store/actions/boardActions';
import { connect } from 'react-redux';
import { DueBadge } from './DueBadge';
import { Link } from 'react-router-dom';
import { MemberInitials } from './MemberInitials';
import { CardMenu } from './CardMenu';

class _CardPreview extends React.Component {

    state = {
        isMenuShown: false,
        clientX: '',
        clientY: '',
    }

    toggleIsMenuShown = (ev) => {
        if (ev) {
            ev.persist();
            const { clientX, clientY } = ev;
            this.setState(prevState => ({ isMenuShown: !prevState.isMenuShown, clientX, clientY }));
        } else {
            this.setState(prevState => ({ isMenuShown: !prevState.isMenuShown }));
        }
    }

    render() {
        const { toggleIsMenuShown, state } = this;
        const { isMenuShown, clientX, clientY } = state;
        const { title, bgColor, imgUrl, dueDate, labels, checkList, assignedTo, attachments } = this.props.card;
        const checklistDoneCount = checkList.filter(item => item.isDone).length;
        const checklistBgc = checklistDoneCount === checkList.length ? '#61bd4f' : '';
        const checklistColor = checklistBgc ? '#fff' : '';
        return (
            <React.Fragment>

                {isMenuShown && <CardMenu card={this.props.card} clientY={clientY} clientX={clientX}
                    toggleIsMenuShown={toggleIsMenuShown} />}

                <Draggable draggableId={this.props.card.id} index={this.props.index}>
                    {(provided) => (
                        // <Link to={`/board/${this.props.board._id}/card/${this.props.card.id}`}>
                        // <button onClick={() => { this.props.setCard(this.props.card) }}>
                        <section onClick={() => { this.props.setCard(this.props.card) }}
                            style={{ backgroundColor: bgColor }} className="card-preview flex column"
                            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                            <button onClick={(ev) => ev.preventDefault()} onMouseUp={toggleIsMenuShown}
                                className="show-menu-btn">
                                <CreateOutlined className="show-menu-icon" />
                            </button>

                            {imgUrl && <div className="card-img"><img alt="Card" src={imgUrl} /></div>}
                            {labels && <CardLabels labels={labels} />}

                            <p>{title}</p>

                            <div className="card-badges flex wrap">
                                {dueDate && <DueBadge dueDate={dueDate} />}

                                {attachments.length > 0 &&
                                    <div className="attach-badge flex align-center">
                                        <AttachmentOutlined className="attach-icon" />
                                        <span>{attachments.length}</span>
                                    </div>}

                                {checkList.length > 0 &&
                                    <div style={{ backgroundColor: checklistBgc, color: checklistColor }}
                                        className="checklist-badge flex align-center">
                                        <span><CheckBoxOutlined className="checklist-icon" />
                                        </span>
                                        <span>{checklistDoneCount}/{checkList.length}</span>
                                    </div>}
                            </div>
                            <div className="members-badge">
                                {assignedTo.length > 0 &&
                                    assignedTo.map((member) => <MemberInitials key={member._id} member={member} />)}
                            </div>
                        </section>
                        // </button>
                        // </Link>
                    )}
                </Draggable>
            </React.Fragment>
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
    setCard
}

export const CardPreview = connect(mapStateToProps, mapDispatchToProps)(_CardPreview)