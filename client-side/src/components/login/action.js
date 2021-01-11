import {
    LOGIN,
    LOGOUT,
} from '../../actionTypes';

const login = (data) => {
    return {
        type: LOGIN,
        payload: data,
    };
};

const logout = () => {
    return {
        type: LOGOUT,
    };
};

export {
    login,
    logout,
}