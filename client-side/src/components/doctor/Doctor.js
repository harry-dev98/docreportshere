import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DoctorList } from './DoctorComponent';

class Doctor extends Component{
    render(){
        return (
            <DoctorList list={this.props.list} />
        );
    }
}
const mapState = ({ doctorState }) => ({
    list: doctorState.doctors,
});

export default connect(mapState)(Doctor);