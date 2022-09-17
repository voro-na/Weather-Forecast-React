import styles from "./Description.module.css";
import {Link, Route, Routes} from "react-router-dom";
import DayForecastDescription from "./DayForecastDescription";
import WeeklyForecast from "./WeeklyForecast";

const Description = (props) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to="/day" className={styles.link}>Daily forecast</Link>
                <Link to="/week" className={styles.link}>5 day forecast</Link>
            </header>
            <Routes>
                <Route path='/day' element={<DayForecastDescription data = {props.data}/>}/>
                <Route path='*' element={<DayForecastDescription data = {props.data}/>}/>
                <Route path='/week' element={<WeeklyForecast data = {props.data}/>}/>
            </Routes>


        </div>
    )
}
export default Description