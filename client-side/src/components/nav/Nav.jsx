import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const [showNotif, setNotif] = useState(false); 
    return (
        <div className="nav-bar">
            <div className="brand">
                <div className="brand-logo"></div>
                <div className="brand-name">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <p className="nav-text">DocReportsHere</p>
                    </Link> 
                </div>
            </div>
            <div className="nav-links">
                <div className="nav-link-item">
                    <i className="fa fa-bell" style={{fontSize: 24, padding: 20}} onClick={()=>setNotif(!showNotif)}>
                        {showNotif && (
                            <div className="notif-container"></div>
                        )}
                    </i>    
                </div>
                <div className="nav-link-item">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <p className="nav-text">Name</p>
                    </Link> 
                </div>
                <div className="nav-link-item">
                    <Link style={{textDecoration: 'none'}} to="/login">
                        <p className="nav-text">Logout</p>
                    </Link> 
                </div>
            </div>
        </div>
    );
}

export default Nav;