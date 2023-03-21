import { useContext,useState } from "react"
import { JsonContext } from "./DefaultDrop"

import { AgGridReact } from 'ag-grid-react';

// import "ag-grid-community/dist/styles/ag-grid.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine.css"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const DoubleAGrid=()=>{

    const JsonData = useContext(JsonContext)

    //why use useState?
    const [columnDefs] = useState([
        // to update width of body coulumn added flex:4 property
        { field: 'id', flex: 1, sortable: true, cellStyle: {textAlign: 'left'},checkboxSelection: true, headerCheckboxSelection: true, sort:'asc' },
        { field: 'name', flex: 1, sortable: true, cellStyle: {textAlign: 'left'}},
        { field: 'email', flex: 1, sortable: true, cellStyle: {textAlign: 'left'}},
        { field: 'body', flex: 4, sortable: true, cellStyle: {textAlign: 'left'} }
    ])

    return (
        <div className="ag-theme-alpine" style={{height:500}}>

            <AgGridReact 
                rowData={JsonData}
                columnDefs={columnDefs}
                rowSelection={'multiple'}
                suppressRowClickSelection={true}
                pagination={true}
                paginationPageSize={25}
                />
        </div>
    )
}
