import { createStore } from 'redux';
import { statement } from '@babel/template';

const initialState = {
    count: 3
};

const reducer = (state = initialState, action) => {
    console.log('reducer running', action);
    switch (action.type) {
        case 'INCREMENT':
            // return Object.assign({}, state, { count: state.count + 1 })
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;