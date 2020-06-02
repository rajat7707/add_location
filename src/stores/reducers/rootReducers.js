import { combineReducers } from 'redux';
import LocationReducers from './locationReducers';

const rootReducers = combineReducers({
	Location : LocationReducers,
})

export default rootReducers ;