import React from 'react';

export function MemberInitials(props) {

    var firstLastName
    if (props.member) {
        firstLastName = props.member.fullName.toUpperCase().split(' ');
    } else {
        firstLastName = props.fullName.toUpperCase().split(' ');
    }

    const initials = firstLastName.map(str => str.charAt(0)).join('');

    return (
        <div className="member-avatar">
            <span className='member-initial'>{initials}</span>
        </div>

    )
}