import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import Chat from '../chat/Chat';
import Card from '../common/Card';
import DashboardTag from './DashboardComponent';

const Dashboard = (props) => {
    const history = useHistory();
    const isLoggedIn = useSelector((state)=>state.userState.isLoggedIn);
    if(!isLoggedIn)history.push('/login');
    const list = [
        {
            title: 'Add new patient',
            label: 'Add Patient',
            onclick: () => {},
            haspopup: true,
        },
        {
            title: 'List of all cases',
            label: 'All Patients',
            onclick: () => {},
            haspopup: false,
        },
        {
            title: 'List of all doctors',
            label: 'All Doctors',
            onclick: () => {},
            haspopup: false,
        }
    ]
    return (
        <>
            <Card list={list} />
            <Chat />
        </>
    );
};

export default Dashboard;