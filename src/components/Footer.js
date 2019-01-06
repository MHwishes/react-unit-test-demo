import React from 'react';
import FilterLink from './FilterLink';
import {visibilityFilters} from '../constant/constants';

const Footer = () => (
    <footer className='footer'>
        <ul className="filters">
            <li>
                <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
            </li>
            <li>
                <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </li>
            <li>
                <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            </li>
        </ul>
    </footer>
);

export default Footer
