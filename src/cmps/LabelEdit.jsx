import React, { Component } from 'react';
import { CreateOutlined, Check } from '@material-ui/icons';

export class LabelEdit extends Component {

    render() {
        const { label, toggleEditMode } = this.props;
        const isLabelOnCard = this.props.card.labels.some(lbl => lbl.id === label.id);
        return (
            <div className="label-edit flex align-center">
                <span onClick={() => { this.props.toggleLabelOnCard(label) }}
                    className="grow flex align-center" style={{ backgroundColor: label.color }}>
                    {label.txt}{isLabelOnCard && <Check className="icon" />}
                </span>
                <button onClick={() => { toggleEditMode(label) }}>
                    <CreateOutlined className="icon" /></button>
            </div >
        );
    }
}
