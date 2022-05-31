import React from 'react';
import PropTypes from 'prop-types';
import { useSelect } from '../hooks/useSelect';
import styles from './Form.module.css';

export const Form = ({ setCategory }) => {
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
    const updateCategory = (e) => {
        e.preventDefault();
        setCategory(category);
    }
    return (
        <div className="row">
            <h2 className={styles.heading}>Find News</h2>
            <form
                onSubmit={updateCategory}
                className="col s12"
            >
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

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}