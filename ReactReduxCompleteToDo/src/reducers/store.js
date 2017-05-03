import todoReducer from './todoReducer';

import { createStore } from 'redux';

let initialState = {
	//todos:[]
	todos:[
		{
			title:"ToDo List 1",
			id:parseInt(Math.random() * 1000),
			lists:[
				{
					note:"repair brain",
					complete:false
				},
				{
					note:"join painting :)",
					complete:false
				},
				{
					note:"complete react-redux full todo app",
					complete:false
				},
				{
					note:"repair brain",
					complete:false
				},
				{
					note:"join painting :)",
					complete:false
				},
				{
					note:"complete react-redux full todo app",
					complete:false
				}
			]
		}
	]
};

let store = createStore(todoReducer,initialState);

export default store;
