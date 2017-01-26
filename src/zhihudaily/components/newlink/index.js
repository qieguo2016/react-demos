/**
 * @authors     : qieguo
 * @date        : 2017/1/26
 * @version     : 1.0.0
 * @description :
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import config from '../../../../config';

const publicPath = config.publicPath;

class NewLink extends Component {
	render() {
		let target = this.props.to;
		target = target[0] === '/' ? publicPath + target.slice(1) : target;
		return (
			<Link {...this.props} to={target}/>
		)
	}
}

export default NewLink;