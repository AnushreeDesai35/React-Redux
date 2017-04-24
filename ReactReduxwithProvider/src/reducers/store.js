import todoReducer from './todoReducer';

import { createStore } from 'redux';

let initialState = {
	todos:[]
};

let store = createStore(todoReducer,initialState);

export default store;
