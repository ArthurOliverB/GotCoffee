import { combineReducers } from 'redux';
import CategoryReducer from './Categories';
// TODO: Add OrdersReducers
export default combineReducers({
	categories: CategoryReducer
});
