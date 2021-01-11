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
        const userList = [
            {
                id: '1',
                name: 'testuser1',
                online: true,
                domain: ['ENT', ],
                avatar: '',
            },
            {
                id: '2',
                name : 'testuser2',
                online: false,
                domain: ['Skin', ],
                avatar: '',
            },
        ];
        return (
            <div className="chat-container">
                <ChatList {...{userList}} openChat={this.props.newChatBox} />
                {Object.entries(this.props.activeChats).map(([key, item]) => (
                    <ChatBox key={key} chatInfo={item} />
                ))}
            </div>
        );
    }
}

const mapState = ({ chatState }) => ({
    activeChats: chatState.activeChats,
});
const mapDispatch = (dispatch) => ({
    newChatBox: (data)=>dispatch(openNewChatBox(data)),
    delChatBox: (id)=>dispatch(deleteChatBox(id)),
});

export default connect(mapState, mapDispatch)(Chat);