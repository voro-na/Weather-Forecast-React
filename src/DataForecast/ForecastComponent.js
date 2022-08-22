const ForecastComponent = (data) => {
    const result = data;
    result.temperature = Math.floor(data.temperature - 272.1);
    result.feelsLike = Math.floor(result.feelsLike -272.1);
    return result
}
export default ForecastComponent