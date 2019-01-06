import todos from './todos'

describe('todos reducer', () => {
    it('should handle initial state', () => {
        const todoItems = todos([], {});
        expect(todoItems).toEqual([])
    })
});

