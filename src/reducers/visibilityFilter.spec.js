import visibilityFilter from './visibilityFilter'
import {SET_VISIBILITY_FILTER} from '../actions'
import {visibilityFilters} from '../constant/constants'

const initialState=visibilityFilters.SHOW_ALL;

describe('visibilityFilter reducer', () => {
    it('should show all items initial state', () => {
        const visibilityFilterState = visibilityFilter(initialState, {});
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_ALL)
    });

    it('should click completed button', () => {
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload:visibilityFilters.SHOW_COMPLETED
        };
        const visibilityFilterState = visibilityFilter(initialState, action);
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_COMPLETED)
    });
});

