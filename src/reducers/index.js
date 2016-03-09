import { combineReducers } from 'redux';
import VideoText from './reducer_video_text';
import VideoSelect from './reducer_video_select';
import VideoList from './reducer_video_list';

const rootReducer = combineReducers({
	text: VideoText,
	selectedVideo: VideoSelect,
	videoList: VideoList 
});

export default rootReducer;
