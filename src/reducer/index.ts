import {combineReducers, createStore} from "redux";
import {UserReducer, UserState} from "./UserReducer";

export interface RootReducerState {
    userReducer: UserState
}

const rootReducer = combineReducers({
    userReducer: UserReducer,
})


const store = createStore(rootReducer)

export default store
