import {
    TOGGLECHAT,
    NEWCHAT,
    DELCHAT,
    SETNOTIFICATIONS,
} from '../../actionTypes';

const initialState = {
    activeChats: {},
    openChats: {},
    notifications: [],
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case TOGGLECHAT:
            return {
                ...state,
                openChats: {
                    ...state.openChats,
                    [action.payload.id]: !state.openChats[action.payload.id],
                },
            };
        case NEWCHAT:
            return {
                ...state,
                activeChats: {
                    ...state.activeChats,
                    ...action.payload.chat,
                },
                openChats: {
                    ...state.openChats,
                    ...action.payload.toggle,
                },
            }
        case DELCHAT:
            delete state.activeChats[action.payload.id];
            delete state.openChats[action.payload.id];
            return {
                ...state,
                activeChats: {
                    ...state.activeChats,
                },
                openChats: {
                    ...state.openChats,
                },
            }
        case SETNOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;