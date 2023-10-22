import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const BackGrnd = () => {
  return (
    <div>
      <AgGridReact gridStyle={{ backgroundColor: 'blue' }} /* other properties */ />
    </div>
  );
};

export default BackGrnd;
