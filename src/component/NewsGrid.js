import React from 'react';
import { AgGridReact } from 'ag-grid-react';
//import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const NewsGrid = ({ newsData }) => {
  const columnDefs = [
    { headerName: 'Title', field: 'title', cellRenderer: linkRenderer },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Source', field: 'source.name' },
    { headerName: 'Published', field: 'publishedAt' }
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  const paginationPageSize = 10;

  function linkRenderer(params) {
    return `<a href="${params.data.url}" target="_blank" rel="noreferrer">${params.value}</a>`;
  }

  const onCellClicked = (event) => {
    if (event.colDef.field === 'title') {
      window.open(event.data.url, '_blank');
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
      <AgGridReact 
        columnDefs={columnDefs} 
        rowData={newsData}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={paginationPageSize}
        onCellClicked={onCellClicked}
      >
      </AgGridReact>
    </div>
  );
};

export default NewsGrid;
