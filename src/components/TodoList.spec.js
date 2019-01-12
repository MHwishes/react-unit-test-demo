import {mount} from 'enzyme';
import TodoList from './TodoList'
import configMockStore from 'redux-mock-store';
import React from 'react'

const mockStore = configMockStore();
import {visibilityFilters} from '../constant/constants'

describe('When user finish this todo-item', () => {
    it('should show item is marked as  completed', () => {
        const initialState = {
            todos: [{id: 0, text: "I eat breakfast", completed: false},
                {id: 1, text: "I eat lunch", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ALL
        };
        const store = mockStore(initialState);
        const wrapper = mount(<TodoList store={store}/>);
        expect(wrapper.find('li').length).toEqual(2);
        wrapper.find('li .toggle-0').simulate('click');
        expect(store.getActions()[0]).toEqual(
            {
                "payload": {
                    "id": 0,
                },
                "type": "TOGGLE_TODO"
            }
        );
    })
});
