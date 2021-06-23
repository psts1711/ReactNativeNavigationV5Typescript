import {UserActionType} from "../actions/UserAction";

export interface UserState {
    isLoggedIn: boolean;
}

const initialState:UserState={
    isLoggedIn:false,
}


export const UserReducer=(state = initialState, action): UserState => {
    switch (action.type) {
        case UserActionType.USER_UPDATE:{
            return {...state, ...action.payload}
        }
        default:{
            return state
        }
    }
}



















