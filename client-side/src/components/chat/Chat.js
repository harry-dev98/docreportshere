import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    openNewChatBox,
    deleteChatBox,
} from './action';
import { ChatList, ChatBox } from './ChatComponent';
class Chat extends Component{
    render(){
        
        return (
            <div className="chat-container">
                <ChatList chatList={this.props.patientList} openChat={this.props.newChatBox} />
                {Object.entries(this.props.activeChats).map(([key, item]) => (
                    <ChatBox key={key} chatInfo={item} />
                ))}
            </div>
        );
    }
}

const mapState = ({ chatState, patientState }) => ({
    activeChats: chatState.activeChats,
    patientList: patientState.patients,
});
const mapDispatch = (dispatch) => ({
    newChatBox: (data)=>dispatch(openNewChatBox(data)),
    delChatBox: (id)=>dispatch(deleteChatBox(id)),
});

export default connect(mapState, mapDispatch)(Chat);