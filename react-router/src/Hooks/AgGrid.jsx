import { useContext,useState } from "react"
import { JsonContext } from "./DefaultDrop"

import { AgGridReact } from 'ag-grid-react';

// import "ag-grid-community/dist/styles/ag-grid.css"
// import "ag-grid-community/dist/styles/ag-theme-alpine.css"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const DoubleAGrid=()=>{

    const JsonData = useContext(JsonContext)

    const [columnDefs] = useState([
        { field: 'id' },
        { field: 'name' },
        { field: 'email' }
    ])

    return (
        <div className="ag-theme-alpine" style={{height:500}}>

            <AgGridReact rowData={JsonData} columnDefs={columnDefs}>
                
            </AgGridReact>
        </div>
    )
}