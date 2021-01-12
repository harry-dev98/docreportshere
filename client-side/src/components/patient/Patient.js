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
        return (
            <div className="patient-container">
                <List list={this.props.list} onClick={(data) => this.setState({activePatient: data})} />
                <PatientData patient={this.state.activePatient} doctors={this.props.doctors} />
            </div>
        );
    }
}

const mapState = ( { patientState, doctorState } ) => ({
    list: patientState.patients,
    doctors: doctorState.doctors,
});

const mapDispatch = ( dispatch ) => ({

})

export default connect(mapState, mapDispatch)(Patient);