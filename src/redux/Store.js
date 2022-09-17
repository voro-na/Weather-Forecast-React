import {combineReducers, compose, legacy_createStore, applyMiddleware} from "redux";
import {formReducer} from "./FormReducer";
import thunk from "redux-thunk";
import {errorReducer} from "./ErrorReducer";
import {forecastReducer} from "./ForecastReducer";

export const reducers = combineReducers({
    form: formReducer,
    error: errorReducer,
    forecast: forecastReducer
})

let store = legacy_createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store