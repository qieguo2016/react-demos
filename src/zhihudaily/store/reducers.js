/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */

const listInitState = {list: [], isLoading: false};
export function listReducer(state = listInitState, action) {
	const list = state.list;
	switch (action.type) {
		case 'FETCH_LATEST':
			if (!action.status) {
				return {list: list, isLoading: true}
			} else if (action.status === 'success') {
				return {list: [action.payload], isLoading: false}
			} else if (action.status === 'error') {
				return {list: list, isLoading: false, error: action.error}
			}
		case 'FETCH_BEFORE':
			if (!action.status) {
				return {list: list, isLoading: true}
			} else if (action.status === 'success') {
				return {list: [...list, action.payload], isLoading: false};
			} else if (action.status === 'error') {
				return {list: list, isLoading: false, error: action.error}
			}
		default:
			return state;
	}
}

const detailInitState = {detail: {}, isLoading: false};
export function detailReducer(state = detailInitState, action) {
	switch (action.type) {
		case 'FETCH_DETAIL':
			if (!action.status) {
				return {detail: {}, isLoading: true}
			} else if (action.status === 'success') {
				return {detail: action.payload, isLoading: false};
			} else if (action.status === 'error') {
				return {detail: {}, isLoading: false, error: action.error}
			}
		default:
			return state;
	}
}