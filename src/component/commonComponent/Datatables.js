import React from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable} from 'mdbreact';

const DatatablePage = (props) => {

    let data = {};

    if(props.type === 'location'){

        const columns = [
            { label: <span>Location Name </span>, field: 'locationName', sort: 'asc', width: 270},
            { label: <span>Address </span>, field: 'firstAddress', sort: 'asc', width: 270},
            { label: <span>Phone </span>, field: 'phone', sort: 'asc', width: 270},
            { label: 'Action', field: 'action', sort: 'disabled', width: 100 },
        ];
        const rows = props.data;
        data = { columns, rows };
    }

    return (
            <MDBDataTable
                striped
                bordered
                hover
                btn
                data={data}
                noBottomColumns
                exportToCSV
                filter="Discount_Condition"
                theadColor="blue"
                noRecordsFoundLabel="No Record Found"
            />
    );
}

export default DatatablePage;