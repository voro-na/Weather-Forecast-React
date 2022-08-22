import styles from "./Description.module.css";

const Description = (props) => {
    return (
        <div className={styles.description}>
{/*            <div>Temperature: {props.data.temperature}°C</div>*/}
            <div className={styles.items}>
                <span className={styles.title}>Temperature: </span>
                <span className={styles.value}>{props.data.temperature}°C</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Feels like: </span>
                <span className={styles.value}>{props.data.feelsLike}°C</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Description: </span>
                <span className={styles.value}>{props.data.description}</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Humidity: </span>
                <span className={styles.value}>{props.data.humidity}%</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Pressure:  </span>
                <span className={styles.value}>{props.data.pressure} hPa</span>
            </div>
            <div className={styles.items}>
                <span className={styles.title}>Wind:  </span>
                <span className={styles.value}>{props.data.wind}m/s</span>
            </div>

        </div>
    )
}
export default Description