import styles from './Forecast.module.css'
import CurrentDay from "./ShortForecast/CurrentDay";
import Description from "./DetailedForecast/Description";


const Forecast = () => {
    return (
        <div className={styles.forecast}>
            <CurrentDay />
            <Description />
        </div>
    )
}

export  default Forecast