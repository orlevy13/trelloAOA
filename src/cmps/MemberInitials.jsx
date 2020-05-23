import React from 'react';

export function MemberInitials(props) {

    const firstLastName = props.member.fullName.toUpperCase().split(' ');
    const initials = firstLastName.map(str => str.charAt(0)).join('').slice(0, 2);

    return (
        <div className="member-avatar">
            <span className='member-initial'>{initials}</span>
        </div>

    )
}