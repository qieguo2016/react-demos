/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 页面结构骨架
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

import '../assets/zhihu.css'
import './page.css';

import config from '../../../config'
const publicPath = config.publicPath   // 部署在根目录下直接使用 '/',多目录则用路径

class Page extends Component {
	render() {
		return (
			<div>
				<header className="header">
					<nav className="inner">
						<Link to={publicPath}>
							<img src={require('../assets/logo.png')} alt="" className="zhihu-logo"/>
						</Link >
						<Link to={publicPath}>
							知乎日报
						</Link>
						<a href="https://github.com/qieguo2016/react-demos"
							 target="_blank"
							 className="github">Built with React.js
						</a>
					</nav>
				</header>
				<div className="view">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Page;