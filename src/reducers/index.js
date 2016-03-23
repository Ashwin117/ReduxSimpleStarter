import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// get the reducer property and create a variable named formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	posts: PostsReducer,
	//MUST USE KEY 'form'
	form: formReducer
});

export default rootReducer;