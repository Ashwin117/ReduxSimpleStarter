//State argument is not application state, only the state this
//reducer is responsible for


//DON't mutate the state!

export default function(state, action) {
	if (!state) {
		state = null;
	}

	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state;	
}