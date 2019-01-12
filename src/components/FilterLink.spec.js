import {mount, shallow} from 'enzyme';
import FilterLink from './FilterLink'
import configMockStore from 'redux-mock-store';
import React from 'react'

const mockStore = configMockStore();
import {visibilityFilters} from '../constant/constants'

const initialState = {
    todos: [
        {id: 0, text: "I have a meeting at 3PM", completed: true},
        {id: 1, text: "I go home at 6PM", completed: false}
    ],
    visibilityFilter: visibilityFilters.SHOW_ALL
};
describe('When user click footer button', () => {
    // todo: need to change
    it('should show all items when click `all` button', () => {
        const store = mockStore(initialState);
        const props = {
            active: 'SHOW_ALL',
            children: 'All',
            filter: 'SHOW_ALL'
        };
        const wrapper = mount(<FilterLink store={store} {...props}/>);
        wrapper.find('.all').simulate('click');
    });

    it('should show all items when click `completed` button', () => {
        const store = mockStore(initialState);
        const props = {
            active: 'SHOW_ALL',
            children: 'Completed',
            filter: 'SHOW_COMPLETED'
        };
        const wrapper = mount(<FilterLink store={store} {...props}/>);
        wrapper.find('.completed').simulate('click');
        expect(store.getActions()).toEqual(
            [{"payload": "SHOW_COMPLETED", "type": "SET_VISIBILITY_FILTER"}]
        );
    });


    it('should show all items when click `active` button', () => {
        const store = mockStore(initialState);
        const props = {
            active: 'SHOW_ALL',
            children: 'Active',
            filter: 'SHOW_ACTIVE'
        };
        const wrapper = mount(<FilterLink store={store} {...props}/>);
        wrapper.find('.active').simulate('click');
        expect(store.getActions()).toEqual(
            [{"payload": "SHOW_ACTIVE", "type": "SET_VISIBILITY_FILTER"}]
        );
    });
});
