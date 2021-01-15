
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
    loginForm ,
    registrationForm
} from '../../utils/formdata';

import {
    loginAPI,
    signupAPI,
} from "../../service/api";

export default function Logout(){
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState([]);
    const [which, setWhich] = useState("")

    const dispatch = useDispatch();
    dispatch(logout());

    const closePopup = async ({submit, form}) => {
        if(submit){
            if(which === "login"){
                loginAPI(form)
                .then((data)=>{
                    dispatch(login(data));
                    history.push('/');
                })
                .catch((error) => {
                    dispatch(logout);
                });
            } else if(which === "register"){
                signupAPI(form)
                .then((data)=>{
                    setOpen(false);
                })
                .catch((error) => {
                    console.log(error);
                });
            }            
        } else {
            setOpen(false);
        }
    }   

    const formPopup = (which)=>{
        if(which === "login"){
            setForm(loginForm);
        } else {
            setForm(registrationForm);
        }
        setWhich(which);
        setOpen(true);
    }

    const list = [
        {
            title: 'Login to your account', 
            label: 'Login', 
            onclick: ()=>{formPopup("login")},
            haspopup: true
        },
        {
            title: 'Register your self on platform',
            label: 'Register', 
            onclick: ()=>{formPopup("register")},
            haspopup: true
        },
    ];

    return (
        <>
            <Card list={list} />
            <Form open={open} formItems={form} which={which} closePopup={closePopup} />
        </>
    );
}
