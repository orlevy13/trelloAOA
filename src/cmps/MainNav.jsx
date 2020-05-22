import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <nav className="flex">
            <h3>Logo</h3>
            <Link to="/login">Login</Link> |
            <Link to="/">Logout</Link> |
            <Link to="/board/:id">board</Link> |
            <Link to="/board/abcd">default board</Link> |
            <Link to="/card">default card</Link> |
        </nav>
    )
}
