import React from 'react';
const Component = React.Component;

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render () {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={this.handleInputChange.bind(this)} />
			</div>
		);
	}


	handleInputChange(event) {
		this.props.onSearch(event.target.value);
		this.setState({term: event.target.value});
	}
};

export default SearchBar;