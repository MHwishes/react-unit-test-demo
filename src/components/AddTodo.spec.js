import React from "react";
import {mount} from 'enzyme';
import Todo from './AddTodo'
import configMockStore from 'redux-mock-store';

const mockEvent = {
    keyCode: 13, // enter 事件
    target: {
        value: "I eat an apple in 12 pm"
    }
};

describe('<AddTodo/>', () => {
   //AC1
    it('should add the one new item in todoList', () => {
        //Given
        const mockStore = configMockStore();
        const initialState = {
            todos: [{id: 1, text: "I am a test Todo", completed: false}],
        };
        const store = mockStore(initialState);
        const wrapper = mount(<Todo store={store}/>);
        //When
        wrapper.find('.new-todo').simulate('keyup', mockEvent);
        //Then
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
