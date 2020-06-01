import React from 'react'
import { Check } from '@material-ui/icons';

export function MemberEdit(props) {
    const { member, toggleMember, activeObject, activeObjectName } = props;
    var isMemberOnObject;
    if (activeObjectName === 'card') {
        isMemberOnObject = activeObject.assignedTo.some(mmbr => mmbr._id === member._id);
    }
    else {
        isMemberOnObject = activeObject.members.some(mmbr => mmbr._id === member._id);
    }

    const firstLastName = member.fullName.toUpperCase().split(' ');
    const initials = firstLastName.map(str => str.charAt(0)).join('').slice(0, 2);

    return (
        <div onClick={(ev) => toggleMember(member, ev)}
            className="member-item flex align-center">
            {!member.img && <div className="initials"><span>{initials}</span></div>}
            {member.img && <span style={{ "backgroundImage": "url(" + member.img + ")" }}
                className="member-img"></span>}
            {member.fullName}{isMemberOnObject && <Check className="icon" />}
        </div>
    )
}
