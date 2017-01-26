/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */


import {fetchLatest, fetchBefore, fetchDetail} from './api'

export function FETCH_LATEST() {
	return function (dispatch) {
		dispatch({
			type: 'FETCH_LATEST'
		});
		fetchLatest()
			.then(({data}) => dispatch({
				type: 'FETCH_LATEST',
				status: 'success',
				payload: data,
			}))
			.catch(({error}) => dispatch({
				type: 'FETCH_LATEST',
				status: 'error',
				error: error,
			}))
	}
}

export function FETCH_BEFORE(date) {
	return function (dispatch) {
		dispatch({
			type: 'FETCH_BEFORE'
		});
		fetchBefore(date)
			.then(({data}) => dispatch({
				type: 'FETCH_BEFORE',
				status: 'success',
				payload: data,
			}))
			.catch(({error}) => dispatch({
				type: 'FETCH_BEFORE',
				status: 'error',
				error: error,
			}))
	}
}

export function FETCH_DETAIL(id) {
	return function (dispatch) {
		dispatch({
			type: 'FETCH_DETAIL'
		});
		fetchDetail(id)
			.then(({data}) => dispatch({
				type: 'FETCH_DETAIL',
				status: 'success',
				payload: data,
			}))
			.catch(({error}) => dispatch({
				type: 'FETCH_DETAIL',
				status: 'error',
				error: error,
			}))
	}
}