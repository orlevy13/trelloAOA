import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export class CardPreview extends React.Component {

    render() {
        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {(provided) => (
                    <section className="card-preview"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <p>{this.props.card.title}</p>
                    </section>
                )}
            </Draggable>
        )
    }





}
