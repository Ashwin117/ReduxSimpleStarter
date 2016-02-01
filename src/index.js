import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyDXE9yjiTu-yrahcqDGgMKL3ocXaKny9NQ';

//Create a new component. This component should produce some HTML
class App extends Component {
	constructor (props) {

		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch ('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			
			this.setState({ 
				videos:videos,
				selectedVideo: videos[0]
			}) //Key in the function is same as state
			//this.setState({ videos: videos });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearch={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList onVideoSelect={this.handleVideoSelect.bind(this)} videos={this.state.videos} />
			</div>
		);
	}

	handleVideoSelect (selectedVideo) {
		this.setState({selectedVideo});
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));
