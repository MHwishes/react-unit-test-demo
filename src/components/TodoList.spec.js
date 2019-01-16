import {mount} from 'enzyme';
import TodoList from './TodoList'
import configMockStore from 'redux-mock-store';
import React from 'react'

const mockStore = configMockStore();
import {visibilityFilters} from '../constant/constants'

describe('<TodoList/>', () => {
    //AC2
    it('should show item is marked as completed', () => {
        //Given
        const initialState = {
            todos: [{id: 0, text: "I eat breakfast", completed: false},
                {id: 1, text: "I eat lunch", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ALL
        };
        const store = mockStore(initialState);
        const wrapper = mount(<TodoList store={store}/>);
        //When
        wrapper.find('li .toggle-0').simulate('click');
        //Then
        expect(store.getActions()[0]).toEqual(
            {
                "payload": {
                    "id": 0,
                },
                "type": "TOGGLE_TODO"
            }
        );
    });
    // AC3
    it('should show all items', () => {
        const initialState = {
            todos: [{id: 0, text: "I eat breakfast", completed: true},
                {id: 1, text: "I eat lunch", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ALL
        };
        const store = mockStore(initialState);
        const wrapper = mount(<TodoList store={store}/>);

        expect(wrapper.find('li').length).toEqual(2);
    });
    //AC4
    it('should show completed items', () => {
        const initialState = {
            todos: [{id: 0, text: "I eat breakfast", completed: true},
                {id: 1, text: "I eat lunch", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_COMPLETED
        };
        const store = mockStore(initialState);
        const wrapper = mount(<TodoList store={store}/>);

        expect(wrapper.find('li').length).toEqual(1);
        expect(wrapper.find('label').text()).toEqual('I eat breakfast');
    });

    //AC5
    it('should show active items', () => {
        const initialState = {
            todos: [{id: 0, text: "I eat breakfast", completed: true},
                {id: 1, text: "I eat lunch", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ACTIVE
        };
        const store = mockStore(initialState);
        const wrapper = mount(<TodoList store={store}/>);

        expect(wrapper.find('li').length).toEqual(1);
        expect(wrapper.find('label').text()).toEqual('I eat lunch');
    })

});
