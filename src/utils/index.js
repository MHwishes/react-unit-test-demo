import {isEmpty} from "lodash";

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

export function makeActonCreator(type, ...argNames) {
    return function (...args) {
        const action = {type};
        argNames = isEmpty(argNames) ? ['payload'] : argNames;
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}
