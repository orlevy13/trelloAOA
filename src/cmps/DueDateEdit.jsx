import React, { Component } from 'react';
import { Clear } from '@material-ui/icons';
import { DateTimePicker } from '@material-ui/pickers';

export class DueDateEdit extends Component {

    state = {
        dueDate: 0
    }

    handleDateChange = date => {
        console.log('date', date)
        //._i Is the timestamp- do not change!
        this.setState({ dueDate: date._i }, () => {
            console.log('this.state', this.state)
        })
    }

    handleSave = () => {
        this.props.changeDueDate(this.state.dueDate);
    }

    render() {
        const { toggleProperty } = this.props;
        const { dueDate } = this.state;
        return (
            <div className="date-picker">
                <div className="date-picker-header flex align-center">
                    <p className="grow">Change Due Date</p>
                    <button onClick={() => { toggleProperty('isDueDateEditShown') }}>
                        <Clear className="icon" /></button>
                </div>
                <div className="date-picker-content flex column justify-center">
                    <DateTimePicker
                        disablePast="true"
                        views={["date", "month", "hours", "minutes"]}
                        variant="inline"
                        value={dueDate} onChange={this.handleDateChange} />
                    <div className="flex space-between">
                        <button onClick={() => { toggleProperty('isDueDateEditShown') }}
                            className="cancel-btn">Cancel</button>
                        <button className="save-btn">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}
// disableToolbar="true"
