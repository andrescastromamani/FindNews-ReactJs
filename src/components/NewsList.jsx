import React from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from './NewsItem'

export const NewsList = ({ news }) => {
    return (
        <div className='row'>
            {
                news.map(item => (
                    <NewsItem
                        key={item.url}
                        item={item}
                    />
                ))
            }
        </div>
    )
}
NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
