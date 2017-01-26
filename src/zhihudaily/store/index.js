/**
 * @authors     : qieguo
 * @date        : 2016/1/24
 * @version     : 1.0
 * @description : 数据store
 */


// 不使用中间件
// import { createStore} from 'redux';
// import reducers from './reducers/index'; 	//Reducers
//
// export let store = createStore(reducers);

// 使用中间件
import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {listReducer, detailReducer} from './reducers';

const reducers = combineReducers({
	listReducer,
	detailReducer
});

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;
