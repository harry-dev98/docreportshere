import {
    TOGGLECHAT,
    NEWCHAT,
    DELCHAT,
} from '../../actionTypes';

const initialState = {
    activeChats: {},
    openChats: {},
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
        default:
            return state;
    }
}

export default reducer;