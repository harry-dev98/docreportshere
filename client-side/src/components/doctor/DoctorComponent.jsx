import React, { useState, } from 'react';
import './Doctor.css';
import { Link } from 'react-router-dom';

import {
    approveDoctorAPI,
} from '../../service/api';

const DoctorList = ({ list, token }) => {
    const [activeDoctor, setActiveDoctor] = useState();
    window.onclick = ()=>{setActiveDoctor(undefined);};
    return (
        <div className="doctor-list">
            {list.map((item, idx) => (
                <div className="doctor-list-item" key={idx} onClick={(event)=>{event.stopPropagation(); setActiveDoctor(item.id)}}>
                    <div className="doctor-name bold-text">{item.name}</div>
                    <div className="doctor light-text">{item.domain}</div>
                    {activeDoctor === item.id &&<> 
                    <div className="triangle"></div>
                    <div className="doctor-info">
                        {item.isApproved?
                        <Link style={{textDecoration: 'none'}} to="/patients">
                            <div className="assign-patient">Assign Patient</div>
                        </Link>
                        :<button className="validate-doctor" onClick={(event)=>{event.stopPropagation(); approveDoctorAPI({doctor: item.id}, token).then(()=>setActiveDoctor(undefined))}}>Accept Doctor</button>
                        } 
                    </div></>}
                </div>
            ))}
        </div>
    )
}

export {
    DoctorList,
};