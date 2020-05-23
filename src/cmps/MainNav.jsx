import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined } from '@material-ui/icons';

export default function MainNav() {
    return (
        <nav>
            <nav className="left-nav flex align-center">
                {/* <Link to="/"> </Link> */}
                <div className="test">
                    <HomeOutlined className="home-icon" />
                </div>

                {/* <Link to="/boards/abcd">
                    <div className="flex align-center">
                        <DashboardOutlined className="home-icon" />
                        <span>Boards</span>
                    </div>
                </Link> */}
                {/* <Link to="/login">Login</Link>
                <Link to="/">Logout</Link>
                <Link to="/board/:id">board</Link>
                <Link to="/board/abcd">default board</Link>
                <Link to="/card">default card</Link> */}
            </nav>

        </nav >

    )
}
