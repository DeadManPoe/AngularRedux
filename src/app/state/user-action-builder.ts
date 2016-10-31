
export class UserActionBuilder {
    static setUserInfo(info : Object){
        return {
            type : 'SET_INFO',
            payload : info
        }
    }
    static setMode(mode : string){
        return {
            type : 'SET_MODE',
            payload : mode
        }
    }
}