/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */

// @todo 右滑返回list、detail中上下滑查看前后记录
// @todo detail做一定量的缓存，一个对象存放实际detail集，一个数组存放id（不必要）

import React, {Component} from 'react';
import './detail.scss';

class Detail extends Component {

	constructor(props) {
		super(props);
		this.touching = false;
		this.touchStart = {x: 0, y: 0};
		this.turnPage = false;
		this.state = {left: 0};
		this.touchStartHandler = this.touchStartHandler.bind(this);
		this.touchMoveHandler = this.touchMoveHandler.bind(this);
		this.touchEndHandler = this.touchEndHandler.bind(this);
	}

	componentWillMount() {
		if (String(this.props.detail.id) !== this.props.routeParams.id) {
			this.props.initData(this.props.routeParams.id);
		}
	}

	render() {
		let header;
		let detail = this.props.detail;
		if (detail.image) {
			header = <div className="detail-header">
				<div className="img-wrap">
					<h1 className="detail-title">{detail.title}</h1>
					<span className="img-source">{detail.image_source}</span>
					<div className="image-container"
							 style={{backgroundImage: `url(${detail.image})`}}>
					</div>
					<div className="img-mask"></div>
				</div>
			</div>
		} else {
			header = <div className="detail-header"><h1 className="detail-title">{detail.title}</h1></div>
		}
		return (
			<div className="detail-view"
					 style={{left: this.state.left}}
					 onTouchStart={this.touchStartHandler}
					 onTouchMove={this.touchMoveHandler}
					 onTouchEnd={this.touchEndHandler}
			>
				{header}
				<div dangerouslySetInnerHTML={{__html: detail.body}}/>
			</div>
		)
	}

	// 绑定触摸滑动的dom事件
	touchStartHandler(e) {
		if (e.targetTouches.length === 1) {
			let touch = e.targetTouches[0];
			this.touchStart.x = touch.clientX;
			this.touchStart.y = touch.clientY;
		}
	}

	touchMoveHandler(e) {
		this.touching = true;
		if (e.targetTouches.length === 1) {
			let touch = e.targetTouches[0];
			let dx = touch.clientX - this.touchStart.x;
			let dy = touch.clientY - this.touchStart.y;
			if (this.touchStart.x < 50 && dx > 5) {
				// swipe to right
				this.setState({left: dx + 'px'});
				if (dx > 80) {
					this.turnPage = true;
				}
				// this.props.router.push('/zhihudaily/')
			}
		}
	}

	touchEndHandler(e) {
		if (this.touching) {
			this.touching = false;
			if (this.turnPage) {
				this.props.router.push('/zhihudaily/')
			} else {
				this.setState({left: '0'});
			}
		}
	}

}

export default Detail;