import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export function BoardUserFilter(props) {

    return (
        <form >
            <div className="search-input-container">
                <input className="board-filter-input" placeholder="Filter by user..." type="text" list="users" name="user" onChange={(event) => props.onInputChanged(event.target.value)} /><SearchIcon className="search-icon" />
            </div>
            {/* <datalist id="users">
                {props.users.map(user => <option value={user.fullName} key={user._id} />)}
            </datalist> */}
        </form>
    )
}
