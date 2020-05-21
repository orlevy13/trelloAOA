import React, { Component } from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LabelIcon from '@material-ui/icons/Label';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

// import PropTypes from 'prop-types'
// import DescriptionIcon from '@material-ui/icons/Description';

export default class CardDetailsSideBar extends Component {
    state = {
        users: ''
    }

    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <section>
                <div className="card-details-sidebar">
                    <button className="card-details-sidebar-btn"><span ><PermIdentityIcon /></span> Member</button>
                    <button className="card-details-sidebar-btn"><span ><LabelIcon /></span>Labels</button>
                    <button className="card-details-sidebar-btn"><span ><PlaylistAddCheckIcon /></span>Checklist</button>
                    <button className="card-details-sidebar-btn"><span ><ScheduleIcon /></span>Due Date</button>
                    <button className="card-details-sidebar-btn"><span ><AttachmentIcon /></span>Attachment</button>
                    <button className="card-details-sidebar-btn"><span ><CropOriginalIcon /></span>Cover</button>

                </div>
            </section>
        )
    }
}
