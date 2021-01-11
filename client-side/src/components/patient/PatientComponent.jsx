import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const List = ({ list, onClick }) => (
    <div className="list-container">
        {list.map((item) => (
            <div className="list-row" onClick={(event)=>{event.stopPropagation(); onClick(item);}}>
                <div className="list-heading">{item.name}</div>
                <div className="list-info">Cause: {item.domain.join(", ")}</div>
            </div>
        ))}
    </div>
);

const Details = ({ patient }) => {
    const patientData = [
        ["Name", patient.name], 
        ["Age", patient.age],
        ["Sex", patient.gender],
        ["Date Of Scan", patient.dateOfScan],
        ["Cause", patient.domain.join(", ")]
    ]
    const [imgs, setImgs] = useEffect([]);
    return (
        <div className="detail-container">
            <div className="detail-items">
                {patientData.map(([label, item]) => {
                    <div className="detail-item-row">
                        <div className="detail-item-label">{label}</div>
                        <div className="detail-item">{item}</div>
                    </div>
                })}
            </div>
            <div className="assign">
                Assign Doctor to the case.
            </div>
            <div className="scan-upload">
                <h5>Upload Scans</h5>
                <div className="add-scan">
                    <input type="file" name="scan" id="input-scan"/>
                    <img src="./img/plus.png" alt="add scans" />
                </div>
                {imgs.map((item) => {
                    <div className="scan">
                        <div className="scan-img">
                            <img src={item}/>
                            <i className="fa fa-times img-delete" />    
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

const Reports = ({ scans }) => {
    return (
        <div className="scans">
            {scans.map((item) => {
                <div className="scan">
                    <div className="scan-img">
                        <img src={item.src}/>    
                    </div>
                    <div className="scan-data">

                    </div>
                </div>
            })}
        </div>
    );
};

const PatientData = ({ patient }) => (
    <>
        <Details {...{patient}} />
        <Reports scans={patient.scans} />
    </>
)

export {
    List,
    PatientData,
}