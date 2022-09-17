import {
    HIDE_ERROR,
    HIDE_FORECAST,
    HIDE_FORM,
    SHOW_ERROR,
    SHOW_FORECAST,
    SHOW_FORM,
    FETCH_FORECAST, FETCH_WEEK_FORECAST
} from "./types";

import axios from "axios";

export const showForm =() =>{
    return{type: SHOW_FORM}
}
export const hideForm =() =>{
    return{type: HIDE_FORM}
}
export const showError =() =>{
    return{type: SHOW_ERROR}
}
export const hideError =() =>{
    return{type: HIDE_ERROR}
}
export const showForecast =() =>{
    return{type: SHOW_FORECAST}
}
export const hideForecast =() =>{
    return{type: HIDE_FORECAST}
}

export const FetchData =  (location) => {
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=946a8e175f3599d95569877ca02d99a1`
    return function (dispatch){
        return axios.get(link)
            .then(response => {
                dispatch(hideError())
                dispatch({type: FETCH_FORECAST, payload: response.data})
                dispatch(hideForm())
                dispatch(showForecast())
            })
            .catch(err => {
                dispatch(showError())
            })
    }
}
export const FetchWeekData =  (location) => {
    const link = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=946a8e175f3599d95569877ca02d99a1`
    return function (dispatch){
        return axios.get(link)
            .then(response => {

                dispatch({type: FETCH_WEEK_FORECAST, payload: response.data})
            })
            .catch(err => {

            })
    }
}

export const ChangeLocation = () => {
  return dispatch =>{
      dispatch(hideForecast())
      dispatch(showForm())
  }
}

export const submitRequest = (location) => {
    return dispatch =>{
        dispatch(FetchData(location))
        dispatch(FetchWeekData(location))
    }
}