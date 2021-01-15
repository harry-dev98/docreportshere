import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DoctorList } from './DoctorComponent';

class Doctor extends Component{
    render(){
        if(!this.props.isLoggedIn){
            this.props.history.push("/login");
            return null;
        }
        return (
            <DoctorList list={this.props.list} token={this.props.token} />
        );
    }
}
const mapState = ({ doctorState, userState }) => ({
    list: doctorState.doctors,
    isLoggedIn: userState.isLoggedIn,
    token: userState.token,
});

export default connect(mapState)(Doctor);