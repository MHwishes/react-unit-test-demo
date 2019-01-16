import React from "react";
import {shallow} from 'enzyme';
import Footer from './Footer'
import toJson from 'enzyme-to-json';

describe('<Footer/>', () => {
    it('render Footer component structure', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find('li').length).toEqual(3);
        //Todo: please write <Footer/> component snapshot test
    });
});
