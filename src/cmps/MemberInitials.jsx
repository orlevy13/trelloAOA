import React from 'react';

export function MemberInitials(props) {


    var firstLastName;
    if (props.member) {
        firstLastName = props.member.fullName.split(' ');
    } else {
        firstLastName = props.fullName.split(' ');
    }

    const initials = firstLastName.map(str => str.charAt(0)).join('').slice(0, 2);

    return (
        <div title={firstLastName.join(' ')} className="member-avatar">
            <span className='member-initial'>{initials.toUpperCase()}</span>
        </div>

    )
}