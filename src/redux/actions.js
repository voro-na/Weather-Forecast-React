import {FETCH_SHORT_FORECAST} from "./types";

export const fetchShortForecast = (data) =>{
    return {type: FETCH_SHORT_FORECAST,
    payload: data}
}