import React, { useState, } from 'react';

const DoctorList = ({ list }) => {
    return (
        <div className="doctor-list">
            {list.map((item) => {
                <div className="doctor-list-item">
                    <div className="doctor-name">{item.name}</div>
                    <div className="doctor">{item.domain.join(", ")}</div>
                    <div className="triangle"></div>
                    <div className="doctor-info">
                        {item.isValid?
                        <div className="assign-patient"></div>
                        :<div className="validate-doctor"></div>
                        } 
                    </div>
                </div>
            })}
        </div>
    )
}

export {
    DoctorList,
};