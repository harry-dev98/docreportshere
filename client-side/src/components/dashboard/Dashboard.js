import React, { useState, } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import Chat from '../chat/Chat';
import Card from '../common/Card';
import Form from '../common/Form';
import DashboardTag from './DashboardComponent';
import {
    addPatientForm
} from '../../utils/formdata';  

import {
    addPatientAPI,
} from '../../service/api';

const Dashboard = (props) => {
    const history = useHistory();
    const [ open, setOpen ] = useState(false);
    const form = addPatientForm;
    const closePopup = ({ submit, form }) => {
        if(submit){
            addPatientAPI(form)
            .then((data)=> setOpen(false))
            .catch((error)=> console.log(error))
        }
        setOpen(false);
    }
    const isLoggedIn = useSelector((state)=>state.userState.isLoggedIn);
    if(!isLoggedIn)history.push('/login');
    const list = [
        {
            title: 'Add new patient',
            label: 'Add Patient',
            onclick: () => {setOpen(true)},
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
    ];
    return (
        <>
            <Card list={list} />
            <Form open={open} formItems={form} which={'addpatient'} closePopup={closePopup} />
            <Chat />
        </>
    );
};

export default Dashboard;