import React from 'react';
import styles from './Form.module.css';

export const Form = () => {
    return (
        <div className="row">
            <h2 className={styles.heading}>Find News</h2>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="search" type="submit" className={styles.btn} value="Search" />
                    </div>
                </div>
            </form>
        </div>
    )
}
