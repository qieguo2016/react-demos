/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 引入页面布局、定义路由配置。路由可以做成按需加载和普通加载，按需加载的模块如果使用ES6，则需要加default，也就是要获得模块输出对象。
 */

import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import ListView from '../views/ListView'
import DetailView from '../views/DetailView'
import Page from '../components/Page'

import config from '../../../config'

const publicPath = config.publicPath   // 部署在根目录下直接使用 '/',多目录则用路径

class NoMatch extends Component {
	render() {
		return (
			<h3>NO MATCH</h3>
		)
	}
}

class AppRouter extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={publicPath} component={Page}>
					<IndexRoute component={ListView}/>
					<Route path="detail/:id" component={DetailView}/>
					<Route path="*" component={NoMatch}/>
				</Route>
			</Router>
		);
	}
}

export default AppRouter;