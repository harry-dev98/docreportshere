import {
    TOGGLECHAT,
    NEWCHAT,
    DELCHAT,
    SETNOTIFICATIONS,
} from '../../actionTypes';

const toggleChatBox = ( id ) => {
    return {
        type: TOGGLECHAT,
        payload: {id: id},
    };
};

const openNewChatBox = ( data ) => {
    let payload = {
        chat: {
            [data.id]: data,
        },
        toggle: {
            [data.id]: true,
        },
    };
    return {
        type: NEWCHAT,
        payload,
    };
};

const deleteChatBox = ( id ) => {
    let payload = { id };
    return {
        type: DELCHAT,
        payload,
    }
}

const setNotifications = (data) => ({
    type: SETNOTIFICATIONS,
    payload: data,
});

export {
    toggleChatBox,
    openNewChatBox,
    deleteChatBox,
    setNotifications,
}