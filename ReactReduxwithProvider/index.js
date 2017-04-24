import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './src/components/Todo';
import {Provider} from 'react-redux';
import store from './src/reducers/store';

ReactDOM.render(<Provider store={store}><Todo/></Provider>, document.getElementById('app'));
