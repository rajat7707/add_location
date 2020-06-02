import { ADD_LOCATION, DELETE_LOCATION, TODO_LOCATION, GET_LOCATION, LOCATION_ERROR, GET_LOCATION_BY_ID, LOCATION_LOADING } from '../actions/actionsType';

const initialState = {
	location : [],
	loading : false,
	payload : {},
	isError : false
}

const  todoReducers = (state = initialState, action) => {

	switch(action.type){
		case GET_LOCATION : 
			return state;
		
		case ADD_LOCATION :

			const update = () => {
				if(action.addType === "Edit Location"){
					let updatedData = state.location.filter( (val) => {
							if(val.id === action.payload.id){
								Object.assign(val, action.payload)
							}
							return val ;
						});
					return updatedData;
				}else{
					return [ ...state.location, action.payload ] ;
				}
			}
			return {
				...state,
				location : update(),
				loading : false,
				isError : false
			}	
		
		
		case DELETE_LOCATION :
			return {
				...state,
				location : state.location.filter( locationData => locationData.id !== action.payload ),
				loading : false,
				isError : false
			}	
			

		case LOCATION_LOADING : 
			return {
				...state,
				loading : true,
				isError : false
			}

		case GET_LOCATION_BY_ID :
			return {
				...state,
				payload : action.payload,
				loading : false
			}	
		

		case LOCATION_ERROR :
			return{
				...state,
				loading : false,
				isError : true
			}
			
		
		default :
			return state;
				
	}
}

export default todoReducers ;