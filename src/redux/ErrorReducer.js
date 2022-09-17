import {HIDE_ERROR, SHOW_ERROR} from "./types";

const initialState ={
    err: false
}
export const errorReducer = (state = initialState, action) =>{
    switch (action.type){
        case SHOW_ERROR:
            return {...state, err: true}
        case HIDE_ERROR:
            return {...state, err: false}
        default: return state
    }
}