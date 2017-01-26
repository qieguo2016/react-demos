/**
 * @authors     : qieguo
 * @date        : 2017/1/24
 * @version     : 1.0.0
 * @description :
 */


import {connect} from 'react-redux';
import Detail from '../components/detail';
import {FETCH_DETAIL} from '../store/actions'

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		detail: state.detailReducer.detail,
		isLoading: state.detailReducer.isLoading,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		initData: id => dispatch(FETCH_DETAIL(id)),
	}
}

// Connected Component
const DetailView = connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail)

export default DetailView;