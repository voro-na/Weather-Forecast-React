import styles from "./Description.module.css";
import {connect} from "react-redux";

const DayForecastDescription = (props) => {
    return (
        <div className={styles.description}>
            <div className={styles.items}>
                <span className={styles.title}>Temperature: </span>
                <span className={styles.value}>{props.temperature}°C</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Feels like: </span>
                <span className={styles.value}>{props.feelsLike}°C</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Description: </span>
                <span className={styles.value}>{props.description}</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Humidity: </span>
                <span className={styles.value}>{props.humidity}%</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Pressure:  </span>
                <span className={styles.value}>{props.pressure} hPa</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Wind:  </span>
                <span className={styles.value}>{props.wind}m/s</span>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    temperature: state.forecast.DetailedForecast.temperature,
    description: state.forecast.DetailedForecast.description,
    feelsLike: state.forecast.DetailedForecast.feelsLike,
    humidity: state.forecast.DetailedForecast.humidity,
    pressure: state.forecast.DetailedForecast.pressure,
    wind: state.forecast.DetailedForecast.wind,

})
export default connect(mapStateToProps, null)(DayForecastDescription)