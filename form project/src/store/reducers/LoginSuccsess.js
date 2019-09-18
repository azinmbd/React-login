import {LOGIN_SUCCSESS} from '../../Type/Types'

const INITIAL_STATE ={
    token: null,
    refreshToken:null
}


export default function LoginSuccsess( state= INITIAL_STATE, action){
    switch(action.type){
        case LOGIN_SUCCSESS:
            console.log(action)
            return {
                ...state,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken 
            };
        default:
            return state;
    }
    
}
