import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardLabels } from './CardLabels';
import { AttachmentOutlined } from '@material-ui/icons';
import { DueBadge } from './DueBadge';

export class CardPreview extends React.Component {

    render() {

        const { title, bgColor, imgUrl, dueDate, labels, checkList, assignedTo, attachments } = this.props.card;

        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {(provided) => (
                    <section style={{ backgroundColor: bgColor }} className="card-preview flex column"
                        {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                        {imgUrl && <div className="card-img"><img src={imgUrl} /></div>}
                        {labels && <CardLabels labels={labels} />}

                        <p>{title}</p>

                        <div className="card-badges flex">

                            {dueDate && <DueBadge dueDate={dueDate} />}

                            {attachments.length > 0 &&
                                <div className="attach-badge flex align-center">
                                    <AttachmentOutlined className="attach-icon" />
                                    <span>{attachments.length}</span>
                                </div>}
                        </div>

                    </section>
                )}
            </Draggable>
        )
    }

}