import {Fragment} from "react";
import styles from './page.module.css'
import Header from "../Header/Header";
import Error from "../Error/Error";
import Form from "../Form/Form";
import Forecast from "../Forecast/Forecast";
import UseForecast from "../../hooks/hooks";



const Page = () => {
    const {isForm, isError, isForecast, submitRequest, submitChange} = UseForecast()

    const onSubmit  = (value) =>{
        submitRequest(value)
    }
    const OnRepeatSubmit =(value)=>{
        submitChange(value)
    }

    return (
        <Fragment>
            <Header/>
            <div className={styles.box}>
                {isForm && <Form submitChange={onSubmit} />}
                {isError && <Error/>}
                {isForecast && <Forecast data={isForecast} OnRepeatSubmit={OnRepeatSubmit}/>}
            </div>
        </Fragment>
    )
}

export default Page