import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../components/video-list-item';

class VideoList extends Component {
	render() {
		if (!this.props.videoList || !this.props.videoList.length) {
			return ( <div>Loading...</div>);
		}
		this.props.videoList.map((video) => {
			return (
				<VideoListItem 
					video={video}
					key={video.etag}/>
			);
		});
	}
}

function mapStateToProps(state) {
	return {
		videoList: state.videoList
	};
}

export default connect(mapStateToProps)(VideoList);