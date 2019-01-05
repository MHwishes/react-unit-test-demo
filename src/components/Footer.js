import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions';

const Footer = () => (
    <footer className='footer'>
        <ul className="filters">
            <li>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            </li>
            <li>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </li>
            <li>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            </li>
        </ul>
    </footer>
);

export default Footer
