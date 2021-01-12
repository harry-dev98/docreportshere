import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Patient.css';

const List = ({ list, onClick }) => (
    <div className="list-container">
        {list.map((item, idx) => (
            <div key={idx} className="list-row" onClick={(event)=>{event.stopPropagation(); onClick(item);}}>
                <div className="list-heading bold-text">{item.name}</div>
                <div className="list-info light-text">Cause: {item.domain.join(", ")}</div>
            </div>
        ))}
    </div>
);

const Details = ({ patient, doctors }) => {
    const patientData = [
        ["Name", patient.name], 
        ["Age", patient.age],
        ["Sex", patient.gender],
        ["Cause", patient.domain.join(", ")]
    ]
    const [imgs, setImgs] = useState([]);
    const fileinput = useRef();
    const handleFileInputChange = () => {
        let files = [ ...fileinput.current.files ];
        files = files.map((item)=>({ img: URL.createObjectURL(item), name: item.name}));
        console.log(files);
        setImgs([...imgs, ...files]);
    };
    console.log(doctors);
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
            <div className="assign">
                {patient.isAssigned && <h5>This case is assigned to doctor {patient.doctorData.name}.</h5>}
                {!patient.isAssigned&&
                <><h5>Assign Doctor to the case.</h5>
                <select name="doc" id="assign-doc">
                    {doctors.map((item, idx)=>(
                        <option key={idx} value={item.id}>{item.name}</option>
                    ))}
                </select></>}
            </div>
            <div className="add-scan">
                <h5>Upload Scans</h5>
                <input type="file" multiple={true} name="scan" id="input-scan" hidden ref={fileinput} onChange={handleFileInputChange}/>
                <img className="logo-img" src="./img/plus.png" alt="add scans" onClick={()=>fileinput.current.click()} />
            </div>
            <div className="scan-upload">
                {imgs.map((item, idx) => (
                    <div className="scan" key={item.name+idx}>
                        <div className="scan-img">
                            <img src={item.img}/>
                            <i className="fa fa-times img-delete" />    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Reports = ({ scans }) => {
    console.log(scans);
    return (
        <div className="scans">
            {scans.length === 0 && <h5>No Scans available</h5>}
            {scans.map((item, idx) => (
                <div className="scan" key={idx}>
                    <div className="scan-img">
                        <img src={item.src}/>    
                    </div>
                    <div className="scan-data">
                        <div className="light-text">Scanned on: {item.date}</div>
                        {item.isReported &&<div className="text">{item.report}</div>}
                    </div>
                </div>
            ))}
            
        </div>
    );
};

const PatientData = ({ patient, doctors }) => (
    <>
        <Details {...{patient, doctors}} />
        <Reports scans={patient.scans} />
    </>
)

export {
    List,
    PatientData,
}