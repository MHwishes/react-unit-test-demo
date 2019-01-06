import {shallow} from 'enzyme';
import TodoList from './TodoList'
import toJson from "enzyme-to-json";
import configMockStore from 'redux-mock-store';
import React from 'react'

const mockStore = configMockStore();
import {visibilityFilters} from '../constant/constants'

describe('shallow render TodoList component', () => {
    it('render TodoList', () => {
        const initialState = {
            todos: [{id: 1, text: "I am a test Todo", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ALL
        };
        const store = mockStore(initialState);
        const wrapper = shallow(
            <TodoList store={store}/>);
        expect(toJson(wrapper.dive())).toMatchSnapshot();
    })
});
