import styles from "./WeekForecast.module.css"
import {connect} from "react-redux";

const WeeklyForecast = (props) => {
    const data = [1, 2, 3, 4, 5, 6]
    const oneDayForecast = props.week.map((forecast) =><div className={styles.items}>
            <div>{forecast.month} {forecast.day}</div>
            <br/>
            <div>Temperature: {forecast.temperature}°C</div>
        </div>)
    return <div className={styles.container}>
        <div className={styles.items}>
            <div>Today</div>
            <br/>
            <div>Temperature: {props.temperature}°C</div>
        </div>
        {oneDayForecast}</div>
}
const mapStateToProps = state => ({
    temperature: state.forecast.shortForecast.temperature,
    week: state.forecast.WeeklyForecast
})
export default connect(mapStateToProps, null)(WeeklyForecast)