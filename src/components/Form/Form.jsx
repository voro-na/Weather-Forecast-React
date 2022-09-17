import styles from './Form.module.css'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {submitRequest} from "../../redux/actions";

const Form = () => {
    const [location, setLocation] = useState('');
    const dispatch =useDispatch()
    const onSubmit = (e) => {
        e.preventDefault();
        if (location ==="" || !location ) return
        dispatch(submitRequest(location))
    }
    return (
        <form onSubmit={onSubmit}>
            <input className={styles.input}
                   placeholder="   city"
                   value={location}
                   onChange={e => setLocation(e.target.value)}
            />
            <button type="submit" className={styles.btn} onSubmit={onSubmit}>SEARCH</button>
        </form>
    )
}

export default Form