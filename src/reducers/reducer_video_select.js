export default function(state, action) {
	if (!state) {
		state = null;
	}

	switch(action.type) {
		case 'VIDEO_SELECT':
			return action.selectedVideo;
		default :
			return state;
	}
}