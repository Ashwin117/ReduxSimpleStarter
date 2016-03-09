import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterVideoName } from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
	render() {
		return (
			<div>
				<input
					value={this.props.text}
					onChange={this.props.enterVideoName.bind(this)} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		text: state.text
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ enterVideoName: enterVideoName }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);