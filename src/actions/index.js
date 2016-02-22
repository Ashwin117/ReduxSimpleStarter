import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDXE9yjiTu-yrahcqDGgMKL3ocXaKny9NQ';

export function enterVideoName(event) {
	//selectBook is an ActionCreator, it needs to return an action,
	//an object with a type property
	return {
		type: 'VIDEO_TEXT',
		videoList: videoSearch(event.target.value),
		payload: event.target.value
	}
}

function videoSearch(term) {
	return new Promise((resolve, reject) => {
		YTSearch({key: API_KEY, term: event.target.value}, (videos) => {
			resolve (videos);
		});
	});
}