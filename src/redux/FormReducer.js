import {HIDE_FORM, SHOW_FORM} from "./types";

const initialState ={
    form: true
}
export const formReducer = (state = initialState, action) =>{
    switch (action.type){
        case SHOW_FORM:
            return {...state, form: true}
        case HIDE_FORM:
            return {...state, form: false}
        default: return state
    }
}