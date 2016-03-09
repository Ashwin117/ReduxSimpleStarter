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

export function selectVideo(event) {
	return {
		type: 'VIDEO_SELECT',
		selectedVideo: event
	}
}

function videoSearch(value) {
	return new Promise((resolve, reject) => {
		YTSearch({key: API_KEY, term: value}, (videos) => {
			resolve(videos);
		});
	});
}

export function populateVideoList(videos) {
	return {
		type: 'VIDEO_LIST',
		videoList: videos
	}
}
