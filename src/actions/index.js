import {makeActonCreator} from '../utils/index'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = makeActonCreator(ADD_TODO);
export const toggleTodo = makeActonCreator(TOGGLE_TODO);
export const setVisibilityFilter = makeActonCreator(SET_VISIBILITY_FILTER);
