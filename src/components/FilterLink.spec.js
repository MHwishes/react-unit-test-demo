import {shallow} from 'enzyme';
import FilterLink from './FilterLink'
import toJson from "enzyme-to-json";
import configMockStore from 'redux-mock-store';
import React from 'react'

const mockStore = configMockStore();
import {visibilityFilters} from '../constant/constants'

describe('shallow render FilterLink component', () => {
    it('render FilterLink', () => {
        const initialState = {
            todos: [{id: 1, text: "I am a test Todo", completed: false}],
            visibilityFilter: visibilityFilters.SHOW_ALL
        };
        const store = mockStore(initialState);
        const wrapper = shallow(<FilterLink store={store}/>);
        expect(toJson(wrapper.dive())).toMatchSnapshot();
    })
});
