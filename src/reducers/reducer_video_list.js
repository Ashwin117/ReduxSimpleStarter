export default function(state, action) {
	if (!state) {
		state = null;
	}

	switch(action.type) {
		case 'VIDEO_TEXT':
			return action.videoList;
		case 'VIDEO_LIST':
			return action.videoList;
		default :
			return state;
	}
}