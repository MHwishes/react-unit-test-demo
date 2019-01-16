import React from "react";
import {shallow} from 'enzyme';
import App from './App'
import toJson from 'enzyme-to-json';

describe("<App/>", () => {
    it('render app component structure', () => {
        const wrapper = shallow(<App/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
