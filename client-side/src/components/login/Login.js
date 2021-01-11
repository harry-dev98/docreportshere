
import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import Form from '../common/Form';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    login,
    logout,
} from './action';

import {
    loginform ,
    registrationform
} from '../../utils/formdata';

export default function Logout(){
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState([]);
    const [which, setWhich] = useState("")

    const dispatch = useDispatch();
    dispatch(logout());
    useEffect((eff)=>{
        console.log(eff);
        if(!open && which !== ""){
            setOpen(true);
        }
    }, [which, open]);

    useEffect(() => {
        if(!open){
            setWhich("");
        }
    }, [open]);

    const closePopup = ({submit, form}) => {
        if(submit){
            console.log(form.role)
            dispatch(login({user: 'demo', isAdmin: form.role }));
            
        }
        setOpen(false);
        history.push('/');
    }   

    const formPopup = (which)=>{
        if(which === "login"){
            setForm(loginform);
            setWhich("Login");
        } else {
            setForm(registrationform);
            setWhich("Registration");
        }
    }

    const list = [
        {
            title: 'Login to your account', 
            label: 'Login', 
            onclick: ()=>{formPopup("login")},
            haspopup: true},
        {
            title: 'Register your self on platform',
            label: 'Register', 
            onclick: ()=>{formPopup("register")},
            haspopup: true},
    ];

    return (
        <>
            <Card list={list} />
            <Form open={open} formItems={form} which={which} closePopup={closePopup} />
        </>
    );
}
