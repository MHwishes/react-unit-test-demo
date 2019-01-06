import {shallow} from "enzyme";
import Todo from "./Todo";
import toJson from "enzyme-to-json";
import React from "react";
import configMockStore from 'redux-mock-store';

const mockStore = configMockStore();

describe('shallow render Todo component', () => {
    it('render Todo', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const props = {id: 1, text: "test", completed: false};
        const wrapper = shallow(<Todo store={store} {...props}/>);
        expect(toJson(wrapper.dive())).toMatchSnapshot();
    })
});
