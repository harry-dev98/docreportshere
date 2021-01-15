import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    List,
    PatientData,
} from './PatientComponent';

class Patient extends Component{
    state = {
        activePatient: this.props.list[0],
    }
    render(){
        if(!this.props.isLoggedIn){
            this.props.history.push("/login");
            return null;
        }
        return (
            <div className="patient-container">
                <List list={this.props.list} onClick={(data) => this.setState({activePatient: data})} />
                <PatientData token={this.props.token} patient={this.state.activePatient} doctors={this.props.doctors} />
            </div>
        );
    }
}

const mapState = ( { userState, patientState, doctorState } ) => ({
    list: patientState.patients,
    doctors: doctorState.doctors.filter((doctor)=>doctor.isApproved),
    isLoggedIn: userState.isLoggedIn,
    token: userState.token,
});

const mapDispatch = ( dispatch ) => ({

})

export default connect(mapState, mapDispatch)(Patient);