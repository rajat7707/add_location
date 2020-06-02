import React, {useState, useEffect, useReducer} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBInputGroup } from 'mdbreact';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation, addLocation, deleteLocation, getLocationById } from '../stores/actions/action';

const Addlocation = (props) => {

	const UsStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	const timeZone = [ { "offset": "GMT-12:00", "name": "Etc/GMT-12" }, { "offset": "GMT-11:00", "name": "Etc/GMT-11" }, { "offset": "GMT-11:00", "name": "Pacific/Midway" }, { "offset": "GMT-10:00", "name": "America/Adak" }, { "offset": "GMT-09:00", "name": "America/Anchorage" }, { "offset": "GMT-09:00", "name": "Pacific/Gambier" }, { "offset": "GMT-08:00", "name": "America/Dawson_Creek" }, { "offset": "GMT-08:00", "name": "America/Ensenada" }, { "offset": "GMT-08:00", "name": "America/Los_Angeles" }, { "offset": "GMT-07:00", "name": "America/Chihuahua" }, { "offset": "GMT-07:00", "name": "America/Denver" }, { "offset": "GMT-06:00", "name": "America/Belize" }, { "offset": "GMT-06:00", "name": "America/Cancun" }, { "offset": "GMT-06:00", "name": "America/Chicago" }, { "offset": "GMT-06:00", "name": "Chile/EasterIsland" }, { "offset": "GMT-05:00", "name": "America/Bogota" }, { "offset": "GMT-05:00", "name": "America/Havana" }, { "offset": "GMT-05:00", "name": "America/New_York" }, { "offset": "GMT-04:30", "name": "America/Caracas" }, { "offset": "GMT-04:00", "name": "America/Campo_Grande" }, { "offset": "GMT-04:00", "name": "America/Glace_Bay" }, { "offset": "GMT-04:00", "name": "America/Goose_Bay" }, { "offset": "GMT-04:00", "name": "America/Santiago" }, { "offset": "GMT-04:00", "name": "America/La_Paz" }, { "offset": "GMT-03:00", "name": "America/Argentina/Buenos_Aires" }, { "offset": "GMT-03:00", "name": "America/Montevideo" }, { "offset": "GMT-03:00", "name": "America/Araguaina" }, { "offset": "GMT-03:00", "name": "America/Godthab" }, { "offset": "GMT-03:00", "name": "America/Miquelon" }, { "offset": "GMT-03:00", "name": "America/Sao_Paulo" }, { "offset": "GMT-03:30", "name": "America/St_Johns" }, { "offset": "GMT-02:00", "name": "America/Noronha" }, { "offset": "GMT-01:00", "name": "Atlantic/Cape_Verde" }, { "offset": "GMT", "name": "Europe/Belfast" }, { "offset": "GMT", "name": "Africa/Abidjan" }, { "offset": "GMT", "name": "Europe/Dublin" }, { "offset": "GMT", "name": "Europe/Lisbon" }, { "offset": "GMT", "name": "Europe/London" }, { "offset": "UTC", "name": "UTC" }, { "offset": "GMT+01:00", "name": "Africa/Algiers" }, { "offset": "GMT+01:00", "name": "Africa/Windhoek" }, { "offset": "GMT+01:00", "name": "Atlantic/Azores" }, { "offset": "GMT+01:00", "name": "Atlantic/Stanley" }, { "offset": "GMT+01:00", "name": "Europe/Amsterdam" }, { "offset": "GMT+01:00", "name": "Europe/Belgrade" }, { "offset": "GMT+01:00", "name": "Europe/Brussels" }, { "offset": "GMT+02:00", "name": "Africa/Cairo" }, { "offset": "GMT+02:00", "name": "Africa/Blantyre" }, { "offset": "GMT+02:00", "name": "Asia/Beirut" }, { "offset": "GMT+02:00", "name": "Asia/Damascus" }, { "offset": "GMT+02:00", "name": "Asia/Gaza" }, { "offset": "GMT+02:00", "name": "Asia/Jerusalem" }, { "offset": "GMT+03:00", "name": "Africa/Addis_Ababa" }, { "offset": "GMT+03:00", "name": "Asia/Riyadh89" }, { "offset": "GMT+03:00", "name": "Europe/Minsk" }, { "offset": "GMT+03:30", "name": "Asia/Tehran" }, { "offset": "GMT+04:00", "name": "Asia/Dubai" }, { "offset": "GMT+04:00", "name": "Asia/Yerevan" }, { "offset": "GMT+04:00", "name": "Europe/Moscow" }, { "offset": "GMT+04:30", "name": "Asia/Kabul" }, { "offset": "GMT+05:00", "name": "Asia/Tashkent" }, { "offset": "GMT+05:30", "name": "Asia/Kolkata" }, { "offset": "GMT+05:45", "name": "Asia/Katmandu" }, { "offset": "GMT+06:00", "name": "Asia/Dhaka" }, { "offset": "GMT+06:00", "name": "Asia/Yekaterinburg" }, { "offset": "GMT+06:30", "name": "Asia/Rangoon" }, { "offset": "GMT+07:00", "name": "Asia/Bangkok" }, { "offset": "GMT+07:00", "name": "Asia/Novosibirsk" }, { "offset": "GMT+08:00", "name": "Etc/GMT+8" }, { "offset": "GMT+08:00", "name": "Asia/Hong_Kong" }, { "offset": "GMT+08:00", "name": "Asia/Krasnoyarsk" }, { "offset": "GMT+08:00", "name": "Australia/Perth" }, { "offset": "GMT+08:45", "name": "Australia/Eucla" }, { "offset": "GMT+09:00", "name": "Asia/Irkutsk" }, { "offset": "GMT+09:00", "name": "Asia/Seoul" }, { "offset": "GMT+09:00", "name": "Asia/Tokyo" }, { "offset": "GMT+09:30", "name": "Australia/Adelaide" }, { "offset": "GMT+09:30", "name": "Australia/Darwin" }, { "offset": "GMT+09:30", "name": "Pacific/Marquesas" }, { "offset": "GMT+10:00", "name": "Etc/GMT+10" }, { "offset": "GMT+10:00", "name": "Australia/Brisbane" }, { "offset": "GMT+10:00", "name": "Australia/Hobart" }, { "offset": "GMT+10:00", "name": "Asia/Yakutsk" }, { "offset": "GMT+10:30", "name": "Australia/Lord_Howe" }, { "offset": "GMT+11:00", "name": "Asia/Vladivostok" }, { "offset": "GMT+11:30", "name": "Pacific/Norfolk" }, { "offset": "GMT+12:00", "name": "Etc/GMT+12" }, { "offset": "GMT+12:00", "name": "Asia/Anadyr" }, { "offset": "GMT+12:00", "name": "Asia/Magadan" }, { "offset": "GMT+12:00", "name": "Pacific/Auckland" }, { "offset": "GMT+12:45", "name": "Pacific/Chatham" }, { "offset": "GMT+13:00", "name": "Pacific/Tongatapu" }, { "offset": "GMT+14:00", "name": "Pacific/Kiritimati" } ];
	
	const [modal13, setModal13] = useState(true);
	const [error, setError] = useState(false);
	const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    	id : (props?.data?.id) ? props.data.id : Math.random(),
	    locationName: (props?.data?.locationName) ? props.data.locationName : "",
	    city: (props?.data?.city) ? props.data.city : "",
	    state:  (props?.data?.state) ? props.data.state : "",
	    zip: (props?.data?.zip) ? props.data.zip : "",
	    phone:  (props?.data?.phone) ? props.data.phone : "",
	    timezone:  (props?.data?.timezone) ? props.data.timezone : "",
	    facilityTime:  (props?.data?.facilityTime) ? props.data.facilityTime : "",
	    appointment:  (props?.data?.appointment) ? props.data.appointment : "",
	    firstAddress:  (props?.data?.firstAddress) ? props.data.firstAddress : "",
	    suiteNo:  (props?.data?.suiteNo) ? props.data.suiteNo : "",
	    secondAddress:  (props?.data?.secondAddress) ? props.data.secondAddress : "",
    }
  );

	// To dispatch an actions to the reducers :-
	const dispatchActions = useDispatch();

	const handleChange = evt => {
	    const name = evt.target.name;
	    const newValue = evt.target.value;
	    setUserInput({[name]: newValue});
	}

	const showPopUP = (nr) => {
		setModal13(!modal13);
		props.openPopup(!props.open);
    }

    const submitAddLocation = async (e) => {
    	e.preventDefault();
    	if(userInput.locationName == '' || userInput.phone == '' || userInput.city == '' || userInput.state == ''  || userInput.timezone == ''  || userInput.facilityTime == ''  || userInput.appointment == '' || userInput.firstAddress == '' || userInput.secondAddress == '' || userInput.suiteNo == ''){
    		setError(true);
    		return false;
    	}

    	if( userInput.zip != "" ){
    		if(userInput.zip.length < 5 || userInput.zip.length > 10){
    			setError(true);
    			return false;
    		}	
	    }
    	dispatchActions(addLocation(userInput, props.type));
    	props.openPopup(!props.open);
    }

	return (
		<MDBModal isOpen={modal13} toggle={() => showPopUP(13)} size="lg">
	        <MDBModalBody>
	            <MDBContainer size="sm" className = "card card-header">
	                <form action="#" onSubmit = {submitAddLocation}>
	                	<h6  style={{ color: "black" }}>{props.type} <span style={{ color: "red" }}> * </span></h6>
	                    <div>
	                        <div className="row">
							    <div className="col">
							      <div className="md-form mt-0">
							      	<lable className = "input-lable"><b>Location Name :-</b></lable>
							        <input type="text" className="form-control" name = 'locationName' value = {userInput.locationName} onChange = {handleChange} placeholder="Location Name" />
							      	{ error && userInput.locationName == "" && <span  className = "input-error">Field is required</span>}
							      </div>
							    </div>
							</div>
	                    </div>
	                    <br/>
	                    <div>
	                        <div className="row">
							    <div className="col">
							      <div className="md-form mt-0">
							        <lable className = "input-lable"><b>Address Line 1 :-</b></lable>
							        <input type="text" className="form-control" name = 'firstAddress'  value = {userInput.firstAddress} onChange = {handleChange} placeholder="Address Line 1" />
							      	{ error && userInput.firstAddress == "" && <span  className = "input-error">Field is required</span>}
							      </div>
							    </div>
						
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Suite No. :-</b></lable>
							        <input type="number" className="form-control"  name = 'suiteNo'  value = {userInput.suiteNo} onChange = {handleChange} placeholder="Suite No." />
							      	{ error && userInput.suiteNo == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>
							</div>    
	                    </div>
	                    <br/>
	                    <div>
	                        <div className="row">
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Address Line 2 :-</b></lable>
							        <input type="text" className="form-control" name = 'secondAddress'   value = {userInput.secondAddress} onChange = {handleChange} placeholder="Address Line 2" />
							      	{ error && userInput.secondAddress == "" && <span  className = "input-error">Field is required</span>}
							      </div>
							    </div>
						
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>City :-</b></lable>
							        <input type="text" className="form-control" name = 'city'   value = {userInput.city} onChange = {handleChange} placeholder="City" />
							      	{ error && userInput.city == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>

							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>state :-</b></lable>
							      	<select  className="form-control" name = 'state' value = {userInput.state} onChange = {handleChange} >
							      		<option value = "">Select State</option>
							      		{UsStates.map( (val) => {
							      			return <option key = {val} value = {val}>{val}</option>
							      		})}
							      	</select>
							      	{ error && userInput.state == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>
							</div>    
	                    </div>
	                    <br/>
	                    <div>
	                        <div className="row">
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Zip :-</b></lable>
							        <input type="number" className="form-control" name = 'zip' value = {userInput.zip} onChange = {handleChange} placeholder="Zip" />
							      	{ !error && userInput.zip.length < 5 && <span style = {{color : "black", fontSize : "14px", float: "left"}}>Min 5 digit required</span>}
							      	{ error && userInput.zip != '' && userInput.zip.length < 5 && <span  className = "input-error">Zip code should be in between 5 to 10 digit</span>}
							      </div>
							    </div>
						
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Phone :-</b></lable>
							        <input type="number" className="form-control" name = 'phone'  value = {userInput.phone} onChange = {handleChange} placeholder="Phone" />
							      	{ error && userInput.phone == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>

							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Timezone :-</b></lable>
							        <select  className="form-control" name = 'timezone' value = {userInput.timezone} onChange = {handleChange} >
							      		<option value = "">Select Timezone</option>
							      		{timeZone.map( (val) => {
							      			return <option key = {val.name} value = {val.name}>{val.name}</option>
							      		})}
							      	</select>
							      	{ error && userInput.timezone == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>
							</div>    
	                    </div>
	                    <br/>
	                    <div>
	                     	<div className="row">
							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Facility Time :-</b></lable>
							        <input type="date" className="form-control" name = 'facilityTime'  value = {userInput.facilityTime} onChange = {handleChange} placeholder="Facility Time" />
							      	{ error && userInput.facilityTime == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>

							    <div className="col">
							      <div className="md-form mt-0">
							      <lable className = "input-lable"><b>Appointment Pool :-</b></lable>
							        <input type="text" className="form-control" name = 'appointment' value = {userInput.appointment} onChange = {handleChange} placeholder="Appointment Pool" />
							      	{ error && userInput.appointment == "" && <span  className = "input-error">Field is required</span>}
							      </div>  
							    </div>
							</div>    
	                    </div>
	                    <br/>
	                    <MDBBtn color="primary" type="submit">Add Todo</MDBBtn>
	                </form>
	            </MDBContainer>
	        </MDBModalBody>

	        <MDBModalFooter>
	            <MDBBtn color="secondary"  onClick={() => showPopUP(13)}  >
	                Close
	            </MDBBtn>
	        </MDBModalFooter>
    	</MDBModal>
	)
}

export default Addlocation ;