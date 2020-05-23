import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined } from '@material-ui/icons';

export default function MainNav() {
    return (
        <nav>
            <h3>Logo</h3>
            <Link to="/login">Login</Link> |
            <Link to="/">Logout</Link> |
            <Link to="/board/:id">board</Link> |
            <Link to="/board/abcd">default board</Link> |
            <Link to="/board/abcd/card/1234">default card</Link> |
        </nav >
    )
}

