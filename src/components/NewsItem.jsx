import React from 'react';
import PropTypes from 'prop-types';

export const NewsItem = ({ item }) => {
    const { urlToImage, url, title, description, source } = item;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt="news header" />
                    <span className="card-title ">{source.name}</span>
                </div>
                <div className="card-content">
                    <p className='blue-text'>{title}</p>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='blue-text'
                    >Read More+</a>
                </div>
            </div>
        </div>
    )
}
NewsItem.propTypes = {
    item: PropTypes.object.isRequired
}
