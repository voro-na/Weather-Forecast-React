import React, {useState} from "react";
import DescriptionComponent from "../DataForecast/DescriptionComponent";
import ForecastComponent from "../DataForecast/ForecastComponent";

const UseForecast = () => {
    const [isForm, setForm] = useState(true)
    const [isError, setError] = useState(false)
    const [isForecast, setForecast] = useState(null)

    const FetchData = async (location) => {
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=946a8e175f3599d95569877ca02d99a1`
        const result = await fetch(`${link}`)
        const data = await result.json()
        data.cod === '404' ? setError('city not found') : setError(false);

        return data
    }

    const submitChange = async () => {
        setForm(true);
        setForecast(null);
    };

    const submitRequest = async (location) => {
        const data = await FetchData(location)
        if (data.cod === '404' || !data)
            return
        setForm(false);
        setForecast(true);

        const DescriptionComponentData = {
            name: data.name,
            icon: data.weather[0].icon,
            description: data.weather[0].main
        }
        const ForecastComponentData = {
            temperature: data.main.temp,
            description: data.weather[0].description,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: data.wind.speed,
        }

        const CurentDay = DescriptionComponent(DescriptionComponentData);
        const ForecastDescription = ForecastComponent(ForecastComponentData);

        setForecast({CurentDay, ForecastDescription})

    }
    return {
        isForm,
        isError,
        isForecast,
        submitRequest,
        submitChange
    }
}
export default UseForecast