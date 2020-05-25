import React, { Component } from 'react';
import { CreateOutlined } from '@material-ui/icons';

export class LabelEdit extends Component {

    render() {
        const { label, toggleEditMode, isEditMode } = this.props;
        return (
            <div>
                {!isEditMode && <div style={{ backgroundColor: label.color }}>
                    {label.txt}
                    <button onClick={() => { toggleEditMode(label) }}>
                        <CreateOutlined /></button>
                </div>
                }
            </div>
        );
    }
}
