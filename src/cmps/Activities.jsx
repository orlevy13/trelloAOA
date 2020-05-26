import React from 'react';
import { MemberInitials } from '../cmps/MemberInitials';
import moment from 'moment';

export function Activities(props) {

    const { activities } = props;

    const dynamicActivity = (activity, index) => {

        const { at, user, type, object, operation, desc } = activity;

        var userElmemnt = null;
        var elmentType = null;



        if (desc) {
            userElmemnt = <a className="activity-user" href={`/user/${user._id}`} target="_blank" rel="noopener noreferrer">{user.fullName}</a>;

            return (
                <div className="activity flex" key={index}>
                    <MemberInitials fullName={user.fullName} />
                    <div className="activity-content flex column">
                        <span>{userElmemnt} {` ${desc}`}</span>
                        <div className="activity-time">{moment(at).fromNow()}</div>
                    </div>
                </div>
            )
        }
        else {

            if (!user) return <div key={index} style={{ "display": "none" }}>stam</div>

            userElmemnt = <a className="activity-user" href={`/user/${user._id}`} target="_blank" rel="noopener noreferrer">{user.fullName}</a>;
            elmentType = <a className="activity-object" href={`/${type}/${object.id}`} target="_blank" rel="noopener noreferrer">{object.title}</a>;

            return (

                < div className="activity flex" key={index} >
                    <MemberInitials fullName={user.fullName} />
                    <div className="activity-content flex column">
                        <span>{userElmemnt} {` ${operation} ${type} ${elmentType}`}</span>
                        <div className="activity-time">{moment(at).fromNow()}</div>
                    </div>
                </div>
            )

        }
    }
    return (
        <React.Fragment>
            {activities.map((activity, index) => dynamicActivity(activity, index))}
        </React.Fragment>
    )
}