import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined, SearchOutlined, AccountTreeOutlined, Add } from '@material-ui/icons';
import { MemberInitials } from './MemberInitials';
const isLogin = true;

export function MainNav() {
    return (
        <header className="main-header flex space-between">
            <nav className="flex align-center">
                <Link to="/">
                    <div className="btn-main-nav">
                        <HomeOutlined className="btn-icon" />
                    </div>
                </Link>
                <Link to="/board/5ecbc8edcb39d7f5494f8d40">
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
            <Link to="/">
                <div className="nav-center flex align-center justify-center">
                    <div className="logo flex align-center">
                        <AccountTreeOutlined className="btn-icon" />
                        <span className="logo-text">Flowz</span>
                    </div>
                </div>
            </Link>
            <nav className="right-nav flex flex-end align-center">
                <div className="btn-main-nav">
                    <Add className="btn-icon" />
                </div>
                {
                    isLogin ? <span className="loged-in"><MemberInitials fullName="Or Levi" /></span> :
                        <div className="btn-main-nav">
                            <span className="btn-text">Login</span>
                        </div>
                }

            </nav>
        </header >
    )
}

