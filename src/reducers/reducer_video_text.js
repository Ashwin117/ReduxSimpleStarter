export default function(state, action) {
	if (!state) {
		state = null;
	}

	switch(action.type) {
	case 'VIDEO_TEXT':
		return action.payload;
	}

	return state;	
}