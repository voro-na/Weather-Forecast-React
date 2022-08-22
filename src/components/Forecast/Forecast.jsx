
import styles from './Forecast.module.css'
import CurrentDay from "./CurrentDay";
import Description from "./Description";

const  Forecast = (props) =>{
    const data = props.data
    //console.log(data)
    return (
        <div className={styles.forecast}>
            <CurrentDay data={data.CurentDay} OnRepeatSubmit={props.OnRepeatSubmit}/>
            <Description data={data.ForecastDescription}/>

        </div>
    )
}

export  default  Forecast