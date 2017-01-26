/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description : 应用入口，引入数据store和APP自身
 */

require('es6-promise').polyfill()

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';   // 在应用外包一层，放入store对象

import store from './store';	  			// store，放在外层
import AppRouter from './router';  	  // 路由表

// actually mount to DOM
ReactDOM.render((
	<Provider store={store}>
		<AppRouter />
	</Provider>
), document.getElementById('app'));