export default function(state, action) {
	if (!state) {
		state = null;
	}

	switch(action.type) {
		case 'VIDEO_SELECT':
			return action.payload;
		default :
			return state;
	}
}