/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */


// @todo 3.添加载入状态：载入中...

import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
import NewLink from '../newlink';

import {formatDate, throttle} from '../../util';
import './list.scss';

class List extends Component {

	// 下面的生命周期钩子全部会执行

	constructor(props) {
		super(props);
		this.scrollListener = throttle(e => {
			if (this.props.isLoading) {
				return;
			}
			if (window.innerHeight + document.body.scrollTop + 150 >= document.body.offsetHeight) {
				let list = this.props.list;
				const latest = list[list.length - 1]
				if (!latest) {
					return;
				}
				this.props.loadMore(latest.date);
			}
		}, 150)
	}

	componentWillMount() {
		if (!this.props.list.length) {
			this.props.initData();
		}
	}

	render() {
		let topStories = this.props.list[0] ? this.props.list[0].top_stories : [];
		return (
			<div className="list-wrp">
				<Carousel className="carousel" autoplay={false} infinite>
					{
						topStories.map((item) => {
							return (
								<NewLink to={`/detail/${item.id}`} key={item.id} className="carousel-item">
									<h1 className="zhihu-title">{item.title}</h1>
									<div className="image-container" style={{backgroundImage: `url(${item.image})`}}></div>
								</NewLink>
							)
						})
					}
				</Carousel>
				{
					this.props.list.map((day) => {
						if (!day) {
							return;
						}
						return (
							<div className="list" key={day.date}>
								<div className="list-title">{formatDate(day.date)}</div>
								{
									day.stories.map((item, index) => {
										return (
											<NewLink to={`/detail/${item.id}`} className="media" key={item.id}>
												<div className="media-body">{item.title}</div>
												<div className="media-right">
													<img src={item.images[0]} alt="" height="80px" width="100px"/>
												</div>
											</NewLink>
										)
									})
								}
							</div>
						)
					})
				}
			</div>
		)
	}

	componentDidMount() {
		document.body.scrollTop = sessionStorage.getItem('scrollTop');
		window.addEventListener('scroll', this.scrollListener);
	}

	componentWillUnmount() {
		sessionStorage.setItem('scrollTop', document.body.scrollTop);
		window.removeEventListener('scroll', this.scrollListener);
	}

}

export default List;
