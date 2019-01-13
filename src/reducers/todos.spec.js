import todos from './todos'
import {ADD_TODO} from '../actions'

describe('todos reducer', () => {
    it('should handle initial state', () => {
        const todoItems = todos([], {});
        expect(todoItems).toEqual([])
    });

    it('should add todo-item in state', () => {
        const action = {
            type: ADD_TODO,
            payload: {
                text: "test",
                completed: false
            }
        };
        const todoItems = todos([], action);
        expect(todoItems).toEqual([{
            id: 0,
            text: "test",
            completed: false
        }])
    });
});

