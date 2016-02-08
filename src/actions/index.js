export function enterVideoName(event) {
	//selectBook is an ActionCreator, it needs to return an action,
	//an object with a type property

	return {
		type: 'VIDEO_TEXT',
		payload: event.target.value
	};
}
