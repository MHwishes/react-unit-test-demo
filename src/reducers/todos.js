import {ADD_TODO, TOGGLE_TODO} from '../actions'
import {assign} from 'lodash';
import {createReducer} from '../utils/index'

let id = 0;
export default createReducer([], {
    [ADD_TODO]: function (state, action) {
        const newState = [...state, {
            id: id++,
            text: action.payload.text,
            completed: false
        }];
        return assign([], newState);

    },
    [TOGGLE_TODO]: function (state, action) {
        const newState = state.map(todo =>
            (todo.id === action.payload.id)
                ? {...todo, completed: !todo.completed}
                : todo
        );
        return assign([], newState);
    }
});
