import {FETCH_FORECAST, FETCH_WEEK_FORECAST, HIDE_FORECAST, SHOW_FORECAST} from "./types";

const initialState = {
    forecast: false,
    shortForecast: {},
    DetailedForecast: {},
    WeeklyForecast: {}
}
const dayWeeks = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday'
}
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const date = new Date()

export const forecastReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_FORECAST:
            return {...state, forecast: true}
        case HIDE_FORECAST:
            return {...state, forecast: false}
        case FETCH_FORECAST:
            const shortForecastData = {
                name: action.payload.name,
                icon: action.payload.weather[0].icon,
                description: action.payload.weather[0].main,
                day: date.getDate(),
                dayWeek: dayWeeks[`${date.getDay()}`],
                month: monthNames[date.getMonth()],
                temperature: Math.floor(action.payload.main.temp - 272.1),
            }
            const DetailedForecastData = {
                temperature: Math.floor(action.payload.main.temp - 272.1),
                description: action.payload.weather[0].description,
                feelsLike: Math.floor(action.payload.main.feels_like - 272.1),
                humidity: action.payload.main.humidity,
                pressure: action.payload.main.pressure,
                wind: action.payload.wind.speed,
            }

            return {
                ...state,
                shortForecast: shortForecastData,
                DetailedForecast: DetailedForecastData
            }
        case FETCH_WEEK_FORECAST: {
            const WeekForecast =[];
            for (let i =4; i<40 ; i+=8){
                const date = new Date(action.payload.list[i].dt * 1000)

                const DayForecast={
                    date: action.payload.list[i].dt,
                    month: monthNames[date.getMonth()],
                    day: date.getDate(),
                    temperature: Math.floor(action.payload.list[i].main.temp - 272.1),
                    icon: action.payload.list[i].weather[0].icon
                }

                WeekForecast.push(DayForecast)
            }

            return {
                ...state,
                WeeklyForecast: WeekForecast
            }
        }
        default:
            return state
    }
}