import { INCREMENT, DECREMENT, LOGOUT, GET_PROFILE, USER_LOADED_SUCCESS, USER_LOADED_FAIL } from "../action/type"
import Store from '../store'


const InitialState = {
    count : 0,
    profile : {},
    cart : 0,
    IsAuthenticated : false
}
function RootReducer (state =  {
    count : 0,
    profile : {
        profile :[
            {
                name : 'null',
                email : 'null@gmail.com'
            }
        ]
    }
}, action) {
    // const {type} = action
    console.log('reached', state.profile)
    switch(action?.type){
        
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        
        case DECREMENT:
            return {
                ...state,
                count : state.count - 1
            }
        
        case USER_LOADED_SUCCESS:
            console.log('called', state.payload)
            
            localStorage.setItem('IsAuthenticated', true)
            return {
                ...state,
                profile : action.payload,
                IsAuthenticated : true
            }
        case USER_LOADED_FAIL : 
            localStorage.setItem('IsAuthenticated', false)
            return {
                ...state,
                profile: {},
                IsAuthenticated : false
            }
        case LOGOUT:
            localStorage.setItem('IsAuthenticated', false)
            localStorage.setItem('access_token',null)
            localStorage.setItem('refresh_token', null)
            return {
                ...state,
                profile : {},
                IsAuthenticated : false,
                count : 0
            }
        
        default:
            return{
                ...state
            }
    }
}

export {RootReducer}