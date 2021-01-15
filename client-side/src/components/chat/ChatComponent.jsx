import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleChatBox, deleteChatBox } from './action';

import './Chat.css';

import {
    newMessageAPI,
    getMessagesAPI
} from '../../service/api';

const ChatHeader = ({ name, online, avatar, onClick, onCross }) => (
    <div className="chat-header" onClick={onClick}>
        { avatar && <img className="chat-avatar" src={avatar} />}
        <div className="chat-heading"><div className="bold-text">{name}</div></div>
        <div className="chat-actions">
            <i className="fa fa-circle chat-status" style={{color: online?'green':'#042F19'}}></i>
            {onCross && <i className="fa fa-times chat-close" style={{color: '#042F19'}} onClick={(event)=>{event.stopPropagation(); onCross()}}></i>}
        </div>
    </div>
)

const ChatList = ({ chatList, openChat }) => {
    const [active, setActive] = useState(false);

    const ChatLabel = () => (
        <div className="chat-label" onClick={()=>setActive(!active)}><div className="text text-center">Chat</div></div>
    );
    return (
        <div className={"chat-list-container"+(active?' active':'')} onBlur={()=>setActive(false)}>
            {active && <div className="chat-list">
            {chatList.map((item) => (
                <ChatHeader key={item.id} {...item} onClick={()=>openChat(item)} />    
                ))}
            </div>}
            <ChatLabel />
        </div>
    );
};

const ChatBox = ({ chatInfo, token, is_hospital }) => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [ messages, setMessages ] = useState([]);
    const active = useSelector((state)=>state.chatState.openChats[chatInfo.id]);
    useEffect(()=>{
        getMessagesAPI(chatInfo.id, token)
        .then((data)=>{
            setMessages(data);
        })
    }, [])
    const sendMessage = () => {
        let data = {
            message: inputRef.current.value,
            patient: chatInfo.id,
            sender: is_hospital?"hospital":"doctor",
        };
        newMessageAPI(data, token).then((_data)=>{
            setMessages([...messages, _data])
            inputRef.current.value = "";
        });
        
    }
    return (
        <div className={"chat-box-container"+ (active?" active":"")}>
            <ChatHeader {...chatInfo} 
                onClick={()=>dispatch(toggleChatBox(chatInfo.id))}
                onCross={()=>dispatch(deleteChatBox(chatInfo.id))}
            />
            {active && <>
                <div className="chat-box">
                    {messages.map((msg) => (
                        <div key={msg.id} className={msg.sender==="hospital"?"left-msg":"right-msg"}><div className="msg-text">{msg.message}</div></div>
                    ))}
                </div>
                <div className="chat-type">
                    <input type="text" name="type_message" id="chat-type" ref={inputRef}/>
                    <i className="fa fa-paper-plane" style={{color: '#042F19'}} onClick={sendMessage}></i>
                </div>
            </>}
        </div>
    );
};

export {
    ChatBox,
    ChatList,
};