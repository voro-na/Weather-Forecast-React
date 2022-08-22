import styles from "./CurrentDay.module.css";

const CurrentDay = (props) => {
    //console.log(props.data.description);
    const onSubmit = (e) => {
        e.preventDefault();
        props.OnRepeatSubmit();

    }
  return (
      <div className={styles.curentDay}>
          <div className={styles.mainInf}>
              <h1 className={styles.text}>{props.data.name}</h1>
              <div>{props.data.day} {props.data.month}</div>
              <div>{props.data.dayWeek}</div>
          </div>

          <div className={styles.IconDiv}>
              <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}/>

          </div>

          <button className={styles.btn} onClick={onSubmit}>Change city</button>

      </div>
  )
}
export default CurrentDay