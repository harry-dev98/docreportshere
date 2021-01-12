import React, { useState, } from 'react';
import './Doctor.css';

const DoctorList = ({ list }) => {
    const [activeDoctor, setActiveDoctor] = useState();
    window.onclick = ()=>{setActiveDoctor(undefined);};
    return (
        <div className="doctor-list">
            {list.map((item, idx) => (
                <div className="doctor-list-item" key={idx} onClick={(event)=>{event.stopPropagation(); setActiveDoctor(item.id)}}>
                    <div className="doctor-name bold-text">{item.name}</div>
                    <div className="doctor light-text">{item.domain.join(", ")}</div>
                    {activeDoctor === item.id &&<> 
                    <div className="triangle"></div>
                    <div className="doctor-info">
                        {item.isValid?
                        <div className="assign-patient">Assign Patient</div>
                        :<div className="validate-doctor">Accept Doctor</div>
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