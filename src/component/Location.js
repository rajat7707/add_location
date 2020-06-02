import React, { useState, useEffect } from 'react';
import LocationImg from '../assest/img/location.jpg';
import Addlocation from './Addlocation';
import { useSelector, useDispatch } from 'react-redux';
import Datatables from './commonComponent/Datatables';
import { getLocation, addLocation, deleteLocation, getLocationById } from '../stores/actions/action';

const Location = () => {
	
	const [type, setType] = useState("");
	const [open, setOpen] = useState(false);
	const [data, setData] = useState();

	// To  Manage the State in the Component :-
	let { location, payload }   = useSelector( state => state.Location );

	// Use to Dipatch actions to reducers :-
	const dispatchActions = useDispatch();
	
	const handleEdit = (e, location, id) => {
		openPopup();
		setType("Edit Location");
		setData(location);
	}

	const openPopup = () => {
		setType("Add Location");
		setOpen(!open);
		setData({})
	}

	const handleDelete = (e, id) => {

		let a = window.confirm("Are you sure you want to delete this record?");
		if(a){
			dispatchActions(deleteLocation(id));
		}

	}

	location = location.filter( (location) => {
		location.action =   <div>
                            <a onClick={(e) => handleEdit(e, location, location.id)} className="textInline" title="Edit" style={{ color: "black"}} ><i className="fa fa-edit" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                            <a onClick={(e) => handleDelete(e, location.id)} className="textInline" title="Delete" style={{ color: "black"}}  ><i className="fa fa-trash" aria-hidden="true"></i></a>
                        </div>

        return location;
	});

	return (
		<>	
			<span className = "col-lg-2">
				<span className = "floatContent"><b>Location</b></span>
			</span>
			<span className = "col-lg-8">
				{  location.length <= 0  && <img src={LocationImg} className="alignImg" alt="Location-Image" />}
				{ open && <Addlocation openPopup = {openPopup} open = {open} data = {data} type = {type} />}
				{ location.length > 0 && <Datatables type = "location" data = {location}/>}
			</span>
			<span className = "col-lg-2">
				<button className = "floatButton btn btn-primary" onClick = {openPopup}>Add Location</button>
			</span>
		</>
	)
}

export default Location ;