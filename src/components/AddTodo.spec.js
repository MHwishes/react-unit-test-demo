import React from "react";
import {shallow} from 'enzyme';
import AddTodo from './AddTodo'
import toJson from 'enzyme-to-json';

describe('When input a new item', () => {
    it('should add the one new item in todoList', () => {
        const wrapper = shallow(<AddTodo/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
