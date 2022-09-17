import {Fragment} from "react";
import styles from './page.module.css'
import Header from "../Header/Header";
import Error from "../Error/Error";
import Form from "../Form/Form";
import Forecast from "../Forecast/Forecast";
import {connect} from "react-redux";

const Page = (props) => {
    return (
        <Fragment>
            <Header/>
            <div className={styles.box}>
                {props.form && <Form />}
                {props.error && <Error/>}
                {props.forecast && <Forecast  />}
            </div>
        </Fragment>
    )
}
const mapStateToProps = state =>({
    form: state.form.form,
    error: state.error.err,
    forecast: state.forecast.forecast,

})
export default connect(mapStateToProps, null)(Page)

