import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import Chat from '../chat/Chat';
import DashboardTag from './DashboardComponent';

const Dashboard = (props) => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.userState.isLoggedIn);
    if(!isLoggedIn)history.push('/login');
    return (
        <>
            <DashboardTag />
            <Chat />
        </>
    );
};

export default Dashboard;