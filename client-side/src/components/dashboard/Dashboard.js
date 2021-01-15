import React, { useState, useEffect } from 'react';
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
    getPatientsAPI,
    getDoctorsAPI,
} from '../../service/api';

import {
    setPatients,
    setDoctors,
} from './action';

const Dashboard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state)=>state.userState.isLoggedIn);
    const is_hospital = useSelector((state)=>state.userState.is_hospital);
    const token = useSelector((state)=>state.userState.token)
    const [ open, setOpen ] = useState(false);
    const form = addPatientForm;
    const closePopup = ({ submit, form }) => {
        if(submit){
            addPatientAPI(form, token)
            .then((data)=> setOpen(false))
            .catch((error)=> console.log(error))
        } else {
            setOpen(false);
        }
    }
    if(!isLoggedIn)history.push('/login');
    const list = is_hospital? [
        {
            title: 'Add new patient',
            label: 'Add Patient',
            onclick: () => {setOpen(true)},
            haspopup: true,
        },
        {
            title: 'List of all cases',
            label: 'All Patients',
            onclick: () => {history.push('/patients')},
            haspopup: false,
        },
        {
            title: 'List of all doctors',
            label: 'All Doctors',
            onclick: () => {history.push('/doctors')},
            haspopup: false,
        }
    ]:[
        {
            title: 'List of all cases',
            label: 'All Patients',
            onclick: () => {history.push('/patients')},
            haspopup: false,
        },  
    ];

    useEffect(()=>{
        getPatientsAPI(token)
        .then((data)=>{
            console.log("patient", data);
            dispatch(setPatients(data));
        })
        .catch((error) => console.log(error));
        if(is_hospital){
            getDoctorsAPI(token)
            .then((data) => {
                dispatch(setDoctors(data));
            })
            .catch((error) => console.log(error))
        }
    }, [])
    return (
        <>
            <Card list={list} />
            <Form open={open} formItems={form} which={'addpatient'} closePopup={closePopup} />
            <Chat />
        </>
    );
};

export default Dashboard;