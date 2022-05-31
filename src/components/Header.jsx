import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
