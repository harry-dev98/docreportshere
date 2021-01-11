import {
    TOGGLECHAT,
    NEWCHAT,
    DELCHAT,
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

export {
    toggleChatBox,
    openNewChatBox,
    deleteChatBox,
}