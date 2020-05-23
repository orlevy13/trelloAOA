import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardLabels } from './CardLabels';
import { AttachmentOutlined, CheckBoxOutlined } from '@material-ui/icons';
import { DueBadge } from './DueBadge';
import { MemberInitials } from './MemberInitials';

export class CardPreview extends React.Component {

    render() {

        const { title, bgColor, imgUrl, dueDate, labels, checkList, assignedTo, attachments } = this.props.card;
        const checklistDoneCount = checkList.filter(item => item.isDone).length;
        // #61bd4f
        const checklistBgc = checklistDoneCount === checkList.length ? '#61bd4f' : '';
        const checklistColor = checklistBgc ? '#fff' : '';
        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {(provided) => (
                    <section style={{ backgroundColor: bgColor }} className="card-preview flex column"
                        {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

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
                )}
            </Draggable>
        )
    }
}