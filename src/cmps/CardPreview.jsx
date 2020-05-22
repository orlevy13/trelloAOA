import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardLabels } from './CardLabels';

export class CardPreview extends React.Component {

    render() {
        const { title, bgColor, imgUrl, dueDate, labels, checkList, assignedTo, attachments } = this.props.card;
        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {(provided) => (
                    <section style={{ backgroundColor: bgColor }} className="card-preview flex column"
                        {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                        {imgUrl && <img src={imgUrl} />}
                        {labels && <CardLabels labels={labels} />}

                        <p>{title}</p>

                    </section>
                )}
            </Draggable>
        )
    }

}

// {
//     id: 'vfdbfb fds bnfsda njbas',   // our id                         
//     bgColor: '#ddd',
//     imgUrl:'',
//     title: 'create-react-app ready to start',
//     desc: 'using cli create new project',
//     dueDate: 159221158158,
//     createdAt: 159221158158, //optional
//     labels:
//         [
//             {
//                 id: 'dvsdvdsv',
//                 color: '#fff',
//                 txt: 'important'
//             },
//             {
//                 id: 'gdfgfsd',
//                 color: '#aaa',
//                 txt: 'good'
//             }
//         ],
//     checkList:
//         [
//             {
//                 id: 'bakdsa',
//                 txt: 'do your homework',
//                 isDone: true

//             },
//             {
//                 id: 'bakdsjk',
//                 txt: 'do your homework',
//                 isDone: false
//             }
//         ],
//     assignedTo:
//         [
//             {
//                 _id: 'ffdgdfsgbsfdbsfd',
//                 fullName: 'Aviad Guest',
//                 img: 'http://cloudinary.com/aviad',
//             },
//             {
//                 _id: 'ffdgdfsgbsfdbsfd',
//                 fullName: 'or Guest',
//                 img: 'http://cloudinary.com/or',
//             }
//         ],
//     attachments:
//         [
//             {
//                 _id: '????vdfvdf',
//                 name: 'project-1.pdf',
//                 url: 'http://cloudinary.com/vhfdbhvhbfd'
//             }
//         ]
// }