import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HOST from '../../service/config';
import {
    addScanAPI,
    assignDoctorAPI,
    addReportAPI,
} from '../../service/api';

import './Patient.css';

const List = ({ list, onClick }) => (
    <div className="list-container">
        {list.map((item, idx) => (
            <div key={idx} className="list-row" onClick={(event)=>{event.stopPropagation(); onClick(item);}}>
                <div className="list-heading bold-text">{item.name}</div>
                <div className="list-info light-text">Cause: {item.cause}</div>
            </div>
        ))}
    </div>
);

const Details = ({ token, is_hospital, patient, doctors }) => {
    const patientData = [
        ["Name", patient.name], 
        ["Age", patient.age],
        ["Sex", patient.gender],
        ["Cause", patient.cause]
    ]
    const [imgs, setImgs] = useState([]);
    const [uploading, setUploading] = useState(false);
    const fileinput = useRef();
    const selectDoc = useRef();
    const handleFileInputChange = () => {
        let files = [ ...fileinput.current.files ];
        setImgs([...imgs, ...files]);
    };
    const uploadScans = () => {
        setUploading(true);
        addScanAPI(imgs, patient.id, token)
        .then((array) => {
            setUploading(false);
            setImgs([]);
        }).catch((error)=>console.log("error:", error));
    }
    return (
        <div className="detail-container">
            <div className="detail-items">
                {patientData.map(([label, item], idx) => (
                    <div className="detail-item-row" key={idx}>
                        <div className="detail-item-label text">{label}</div>
                        <div className="detail-item bold-text">{item}</div>
                    </div>
                ))}
            </div>
            {is_hospital && <><div className="assign">
                {patient.isAssigned && <h5>This case is assigned to doctor {patient.doctor.name}.</h5>}
                {!patient.isAssigned&&
                <><h5>Assign Doctor to the case.</h5>
                <select ref={selectDoc} name="doc" id="assign-doc" defaultValue="">
                <option value="" > -- select -- </option>
                    {doctors.map((item, idx)=>(
                        <option key={idx} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <i className="fa fa-check" onClick={()=>{assignDoctorAPI({doctor: selectDoc.current.value, patient: patient.id}, token)}}/>    
                </>}
            </div>
            <div className="add-scan">
                <h5>Upload Scans</h5>
                <input type="file" multiple={true} name="scan" id="input-scan" hidden ref={fileinput} onChange={handleFileInputChange}/>
                <img className="logo-img" src="./img/plus.png" alt="add scans" onClick={()=>fileinput.current.click()} />
            </div>
            <div className="scan-upload">
                {imgs.map((img, idx) => (
                    <div className="scan" key={img.name+idx}>
                        <div className="scan-img">
                            <img src={URL.createObjectURL(img)}/>
                            <i className="fa fa-times img-delete" onClick={()=>{setImgs(imgs.filter(_img=>_img!==img))}}/>    
                        </div>
                    </div>
                ))}
            </div>
            {imgs.length!==0 && <button className="upload-btn" onClick={uploadScans}>Upload</button>}
            {uploading && <h5>Uploading</h5>}</>}
        </div>
    );
}

const Reports = ({ scans, token, is_hospital }) => {
    const inputRef = useRef();
    const addReport = (id)=>{
        let data = {
            scan: id,
            report: inputRef.current.value,
        };
        addReportAPI(data, token)
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
    };
    return (
        <div className="scans">
            {scans.length === 0 && <h5>No Scans available</h5>}
            {scans.map((item) => (
                <div className="scan" key={item.id}>
                    <div className="scan-img">
                        <img src={HOST + item.src}/>    
                    </div>
                    <div className="scan-data">
                        <div className="light-text">Scanned on: {item.date}</div>
                        {item.isReported &&<div className="text">{item.report}</div>}
                        {!is_hospital && !item.isReported && 
                        <div className="input-report">
                            <input ref={inputRef} type="text" name="report" id="input-report"/>
                            <i className="fa fa-check" onClick={()=>{addReport(item.id)}} />
                        </div>}
                    </div>
                </div>
            ))}
            
        </div>
    );
};

const PatientData = ({ token, is_hospital, patient, doctors }) => (
    <>
        <Details {...{token, is_hospital, patient, doctors}} />
        <Reports scans={patient.scans} {...{token, is_hospital}} />
    </>
)

export {
    List,
    PatientData,
}