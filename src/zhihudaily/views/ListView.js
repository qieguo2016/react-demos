/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */


import {connect} from 'react-redux';
import List from '../components/list';
import {FETCH_LATEST, FETCH_BEFORE} from '../store/actions'

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		list: state.listReducer.list,
		isLoading: state.listReducer.isLoading,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		initData: () => dispatch(FETCH_LATEST()),
		loadMore: date => dispatch(FETCH_BEFORE(date)),
	}
}

// Connected Component
const ListView = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default ListView;
