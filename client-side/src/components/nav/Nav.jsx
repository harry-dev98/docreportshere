import React, { useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const [showNotif, setNotif] = useState(false); 
    const history = useHistory();
    const dispatch = useDispatch();
    const notifs = useSelector((state)=>state.chatState.notifications)
    const is_hospital = useSelector((state)=>state.userState.is_hospital);
    const isLoggedIn = useSelector((state)=>state.userState.isLoggedIn);
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
                            <div className="notif-container">
                                {notifs.map((notif)=>(
                                    <div className="notif-item" key={notif.id}>{notif.message}</div>
                                ))}
                            </div>
                        )}
                    </i>    
                </div>
                <div className="nav-link-item">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <p className="nav-text">{isLoggedIn && (is_hospital?"Hospital":"Doctor")}</p>
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