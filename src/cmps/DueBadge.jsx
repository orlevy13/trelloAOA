import React from 'react';
import moment from 'moment';
import { AccessTime } from '@material-ui/icons';

export const DueBadge = ({ dueDate }) => {

    const displayDate = dueDate ? moment(dueDate).format("MMM Do") : null;
    const isDueClose = ((dueDate - Date.now()) < 86400000) ? true : false;
    const isDuePassed = Date.now() > dueDate ? true : false;
    const dueBgc = isDuePassed ? '#eb5a46' : isDueClose ? '#f2d600' : '#fff';
    const dueColor = dueBgc === '#fff' ? '#5e6c84' : '#fff';

    return (
        <div style={{ backgroundColor: dueBgc, color: dueColor }}
            className="card-due flex align-center"> <span className="due-icon">
                <AccessTime fontSize="small" /></span>{displayDate}</div>
    );
}

