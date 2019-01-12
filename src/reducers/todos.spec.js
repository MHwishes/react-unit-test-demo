import todos from './todos'
import {ADD_TODO, TOGGLE_TODO} from '../actions'

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

    it('should toggle todo in  state', () => {
        const action = {
            type: TOGGLE_TODO,
            payload: {
                id: 1
            }
        };
        const todoItems = todos([{
            id: 1,
            text: "test",
            completed: false
        }], action);

        expect(todoItems).toEqual([{
            id: 1,
            text: "test",
            completed: true
        }])
    })
});

