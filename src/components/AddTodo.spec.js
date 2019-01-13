import React from "react";
import {shallow,mount} from 'enzyme';
import Todo, {AddTodoView} from './AddTodo'
import configMockStore from 'redux-mock-store';

const mockEvent = {
    keyCode: 13, // enter 事件
    target: {
        value: "I eat an apple in 12 pm"
    }
};

// test component with action
describe('When input a new item', () => {
    it('should add the one new item ', () => {
        const mockStore = configMockStore();
        const initialState = {
            todos: [{id: 1, text: "I am a test Todo", completed: false}],
        };
        const store = mockStore(initialState);
        const wrapper = mount(<Todo store={store}/>);
        expect(wrapper.find('.new-todo').exists()).toEqual(true);
        wrapper.find('.new-todo').simulate('keyup', mockEvent);
        expect(store.getActions()[0]).toEqual(
            {
                "payload": {
                    "text": "I eat an apple in 12 pm"
                },
                "type": "ADD_TODO"
            }
        );
    });
});

// only test for component
describe('When input a new item', () => {
    it('should add the one new item ', () => {
        const props = {
            addTodo: jest.fn(e=>{})
        };
        const wrapper = shallow(<AddTodoView {...props}/>);
        expect(wrapper.find('.new-todo').exists()).toEqual(true);
        wrapper.find('.new-todo').simulate('keyup', mockEvent);
        expect(mockEvent.target.value).toEqual('')
    });
});
