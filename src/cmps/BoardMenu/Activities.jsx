import React from 'react'
import { Card } from '@material-ui/core';

export default function Activities(props) {

    const { activities } = props;

    const dynamicActivity = (activity) => {

        const { user, type, object, operation, desc } = activity;
        var dynamicElment = null;
        var userElmemnt = null;
        var elmentType = null;
        if (desc) {
            const reg = /\{([^}]+)\}/
            var matches = desc.match(reg);
            for (let index = 0; index < matches.length; index++) {
                const match = matches[index];
                if (match.toLowerCase().includes(user.toLowerCase())) {
                    userElmemnt = `<a href="/user/${user._id}" target="_blank" rel="noopener noreferrer">${user.fullName}</a>`;
                }
                if (match.includes('card')) {
                    elmentType = `<a href="/${type}/${object.id}" target="_blank" rel="noopener noreferrer">${object.title}</a>`;
                }
                if (match.includes('board')) {
                    elmentType = `<a href="/${type}/${object._id}" target="_blank" rel="noopener noreferrer">${object.title}</a>`;
                }
            }
            dynamicElment = <span>{elmentType}</span>;
            return dynamicElment;
        }
        else {

            userElmemnt = `<a href="/user/${user._id}" target="_blank" rel="noopener noreferrer">${user.fullName}</a>`;
            elmentType = `<a href="/${type}/${object.id}" target="_blank" rel="noopener noreferrer">${object.title}</a>`;
            dynamicElment = `<span>${userElmemnt}  ${operation} ${type} ${object.title}</a></span>`;
            return dynamicElment

        }
    }
    return (
        <React.Fragment>
            {activities.map(activity => dynamicActivity(activity))}
        </React.Fragment>
    )
}

