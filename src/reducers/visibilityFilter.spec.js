import visibilityFilter from './visibilityFilter'
import {SET_VISIBILITY_FILTER} from '../actions'
import {visibilityFilters} from '../constant/constants'

const initialState=visibilityFilters.SHOW_ALL;

describe('visibilityFilter reducer', () => {
    it('should show all items  when ', () => {
        const visibilityFilterState = visibilityFilter(initialState, {});
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_ALL)
    });

    it('should add todo-item in state', () => {
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload:visibilityFilters.SHOW_COMPLETED
        };
        const visibilityFilterState = visibilityFilter(initialState, action);
        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_COMPLETED)
    });

    it('should toggle todo in  state', () => {
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload:visibilityFilters.SHOW_ACTIVE
        };
        const visibilityFilterState = visibilityFilter(initialState, action);

        expect(visibilityFilterState).toEqual(visibilityFilters.SHOW_ACTIVE)
    })
});

