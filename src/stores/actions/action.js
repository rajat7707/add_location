import { ADD_LOCATION, EDIT_LOCATION, DELETE_LOCATION, LOCATION_LOADING, GET_LOCATION, LOCATION_ERROR, GET_LOCATION_BY_ID } from './actionsType';
import axios from 'axios';

export const setLocationLoading = () => {
	return {
		type : LOCATION_LOADING
	}
}

export const asyncLocationError = () => {	
	return {
		type : LOCATION_ERROR,
	}
}

// Get Todo :- 

export const getLocation = () => {
	return {
		type    : GET_LOCATION,
		loading : false,
	}
}

// End of Get Todo

// Add Todo :- 

export const addLocation = (locationData, addType) => {
	return{
		loading :  false,
		payload : locationData,
		type    : ADD_LOCATION,
		addType : addType
	}
}

// End of Add Todo

// Delete Todo :-

export const deleteLocation = (id) => {
	return{
		type : DELETE_LOCATION,
		payload : id
	}
}
// End of Delete Todo