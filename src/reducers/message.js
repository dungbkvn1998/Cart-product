import * as types from '../constants/ActionTypes';
import * as mes from '../constants/Messages';

let initialState = mes.MSG_WELLCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            console.log(action);
            return state
        default:
            return state;
    }
}

export default message;