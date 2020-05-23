import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined, SearchOutlined, AccountTreeOutlined, Add } from '@material-ui/icons';
import { MemberInitials } from './MemberInitials';
const isLogin = true;
export default function MainNav() {
    return (
<<<<<<< HEAD
        <nav>
            <h3>Logo</h3>
            <Link to="/login">Login</Link> |
            <Link to="/">Logout</Link> |
            <Link to="/board/:id">board</Link> |
            <Link to="/board/abcd">default board</Link> |
            <Link to="/board/abcd/card/1234">default card</Link> |
        </nav >
=======
        <header className="main-header flex space-between">
            <nav className="flex align-center">
                <Link to="/">
                    <div className="btn-main-nav">
                        <HomeOutlined className="btn-icon" />
                    </div>
                </Link>
                <Link to="/board/abcd">
                    <div className="btn-main-nav flex align-center">
                        <DashboardOutlined className="btn-icon" />
                        <span className="btn-text">Boards</span>
                    </div>
                </Link>
                <div className="flex align-center">
                    <input className="search-input" type="text"></input>
                    <SearchOutlined className="search-icon" />
                </div>
            </nav>
            <div className="nav-center flex align-center justify-center">
                <div className="logo flex align-center">
                    <AccountTreeOutlined className="btn-icon" />
                    <span className="logo-text">Flows</span>
                </div>
            </div>
            <nav className="right-nav flex flex-end align-center">
                <div className="btn-main-nav">
                    <Add className="btn-icon" />
                </div>
                {isLogin ? <span className="loged-in"><MemberInitials fullName="Or Levi" /></span> :
                    <div className="btn-main-nav">
                        <span className="btn-text">Login</span>
                    </div>}
            </nav>



        </header>
>>>>>>> 4407338d9064a020e69895ed81a39e3d71f481e6
    )
}

