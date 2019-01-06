import {SET_VISIBILITY_FILTER} from '../actions'
import {visibilityFilters} from '../constant/constants'
import {createReducer} from '../utils/index'

export default createReducer(visibilityFilters.SHOW_ALL, {
    [SET_VISIBILITY_FILTER]: function (state, action) {
        return action.payload;
    }
});
