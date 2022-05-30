import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Form.module.css';

export const Form = () => {
    const options = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Business' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
    ];
    const [category, SelectNews] = useSelect('general', options);
    return (
        <div className="row">
            <h2 className={styles.heading}>Find News</h2>
            <form className="col s12">
                <SelectNews />
                <div className="row">
                    <div className="input-field col s12">
                        <input id="search" type="submit" className={styles.btn} value="Search" />
                    </div>
                </div>
            </form>
        </div>
    )
}
