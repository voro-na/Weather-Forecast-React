import styles from "./CurrentDay.module.css";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeLocation} from "../../../redux/actions";

const CurrentDay = (props) => {
    const dispatch=useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(ChangeLocation())
    }
  return (
      <div className={styles.curentDay}>
          <div className={styles.mainInf}>
              <h1 className={styles.text}>{props.name}</h1>
              <div>{props.day} {props.month}</div>
              <div>{props.dayWeek}</div>
          </div>

          <div className={styles.IconDiv}>
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/>

          </div>

          <button className={styles.btn} onClick={onSubmit}>Change city</button>

      </div>
  )
}

const mapStateToProps = state => ({
    name: state.forecast.shortForecast.name,
    icon: state.forecast.shortForecast.icon,
    description: state.forecast.shortForecast.description,
    day:state.forecast.shortForecast.day,
    dayWeek: state.forecast.shortForecast.dayWeek,
    month: state.forecast.shortForecast.month,
    time: state.forecast.shortForecast.time

})
export default connect(mapStateToProps, null)(CurrentDay)