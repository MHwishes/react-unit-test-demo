import React from "react";
import {shallow} from 'enzyme';
import Footer from './Footer'
import toJson from 'enzyme-to-json';

describe('shallow render todoList Footer component', () => {
    it('render TodoList footer', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find('li')).toHaveLength(3);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
