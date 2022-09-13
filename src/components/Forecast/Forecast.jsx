import styles from './Forecast.module.css'
import CurrentDay from "./ShortForecast/CurrentDay";
import Description from "./DetailedForecast/Description";

const Forecast = (props) => {
    const data = props.data

    return (
        <div className={styles.forecast}>
            <CurrentDay data={data.CurentDay} OnRepeatSubmit={props.OnRepeatSubmit}/>
            <Description data={data.ForecastDescription}/>
        </div>
    )
}

export default Forecast