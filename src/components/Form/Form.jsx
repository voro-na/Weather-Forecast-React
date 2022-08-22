import styles from './Form.module.css'
import React, {useState} from "react";


const Form = (props) => {
    const [location, setLocation] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (location ==="" || !location ) return
        props.submitChange(location);
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