import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populateVideoList } from '../actions/index';
import { selectVideo } from '../actions/index';
import VideoListItem from '../components/video-list-item';
import {bindActionCreators} from 'redux';
import VideoDetail from '../components/video-detail';

class VideoList extends Component {
	render() {
		if (this.props.videoList && !this.props.videoList.length) {
			this.props.videoList.then((videos) => {
				this.props.populateVideoList(videos);
			});
		}

		if (!this.props.videoList) {
			return <div>Loading...</div>
		} else {
			var videoItems = this.props.videoList.map((video) => {
				return (<VideoListItem
					video={video}
					onVideoSelect={this.props.selectVideo}
					key={video.etag}/>
				)
			});

			return (
				<div>
					<VideoDetail video={this.props.selectedVideo} />
					<ul className="col-md-4 list-group">
						{videoItems}
					</ul>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		videoList: state.videoList,
		selectedVideo: state.selectedVideo
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ populateVideoList: populateVideoList, selectVideo: selectVideo}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
