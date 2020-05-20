import React from 'react';
export function MemberInitials(props) {


    let firstLastName = props.member.fullName.split(' ');
    const initials = `${firstLastName[0].charAt(0)}${(firstLastName[1]) ? firstLastName[1].charAt(0) : ''} `

    return (
        <div className="member-avatar">
            <span className='member-initial'>{initials}</span>
        </div>

    )

}