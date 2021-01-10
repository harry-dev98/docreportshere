import React, { Component } from 'react';

import Chat from '../chat/Chat';
import DashboardTag from './DashboardComponent';

export default class Dashboard extends Component{
    render(){
        return (
            <>
                <DashboardTag />
                <Chat />
            </>
        );
    }
}