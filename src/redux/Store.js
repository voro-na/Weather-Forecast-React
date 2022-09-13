import {combineReducers, legacy_createStore} from "redux";
import {DescriptionReducer} from "./DescriptionComponent";
let reducers =combineReducers({description: DescriptionReducer})

let store = legacy_createStore(reducers)

export default store