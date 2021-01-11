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
            <>
                <List list={this.props.list} onClick={(data) => this.setState({activePatient: data})} />
                <PatientData patient={this.state.activePatient}/>
            </>
        );
    }
}

const mapState = ( { patientState } ) => ({
    list: patientState.patients,
});

const mapDispatch = ( dispatch ) => ({

})

export default connect(mapState, mapDispatch)(Patient);