import { combineReducers } from 'redux';
import VideoText from './reducer_video_text';

const rootReducer = combineReducers({
	text: VideoText
});

export default rootReducer;
