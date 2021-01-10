import React from 'react';

import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {

    return (
        <div className="nav-bar">
            <div className="brand">
                <div className="brand-logo"></div>
                <div className="brand-name">
                    <p className="nav-text">DocReportsHere</p>
                </div>
            </div>
            <div className="nav-links">
                {}
                <div className="nav-link-item">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <p className="nav-text">Name</p>
                    </Link> 
                </div>
                <div className="nav-link-item">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <p className="nav-text">Logout</p>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default Nav;