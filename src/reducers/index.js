import { combineReducers } from 'redux';
import VideoText from './reducer_video_text';
import VideoList from './reducer_video_list';

const rootReducer = combineReducers({
	text: VideoText,
	videoList: VideoList 
});

export default rootReducer;
