import todoReducer from './todoReducer';

import { createStore } from 'redux';

let initialState = {
	todos:[{content:"sdfsd",title:"sdf"}]
};

let store = createStore(todoReducer,initialState);

export default store;