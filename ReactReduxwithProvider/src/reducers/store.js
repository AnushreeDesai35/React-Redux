import todoReducer from './todoReducer';

import { createStore } from 'redux';

let initialState = {
	//todos:[]
	todos:[]
};

let store = createStore(todoReducer,initialState);

export default store;
