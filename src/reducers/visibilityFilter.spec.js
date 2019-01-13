import visibilityFilter from './visibilityFilter'
import {SET_VISIBILITY_FILTER} from '../actions'
import {visibilityFilters} from '../constant/constants'

const initialState=visibilityFilters.SHOW_ALL;

describe('visibilityFilter reducer', () => {
    it('should show initial visibilityFilter `SHOW_ALL` ', () => {
        const visibilityFilterState = visibilityFilter(initialState, {});
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_ALL)
    });

    it('should click completed button and change visibilityFilter to `SHOW_COMPLETED`', () => {
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload:visibilityFilters.SHOW_COMPLETED
        };
        const visibilityFilterState = visibilityFilter(initialState, action);
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_COMPLETED)
    });

    //TODO: Here please write a test  about AC5
});

