export enum UserActionType {
    USER_UPDATE = 'User Update'
}


export class UserActions{
    static UpdateUserAction=(payload)=>{
        return {
            type: UserActionType.USER_UPDATE,
            payload: payload
        }
    }

}
