import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Tour {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface DataGridaProps {
  tours: Tour[];
}

const DataGrida: React.FC<DataGridaProps> = ({ tours }) => {
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Id', width: 150 },
    { field: 'col2', headerName: 'Groups', width: 150 },
    { field: 'col3', headerName: 'Title', width: 150 },
    { field: 'col4', headerName: 'Body', width: 150 },
  ];

  const rows = tours.map((ids) => ({
    id: ids.id,
    col1: ids.id,
    col2: ids.userId,
    col3: ids.title,
    col4: ids.body,
  }));

  const gridProps = {
    pageSize: 25,
    rowsPerPageOptions: [25, 50, 100],
    pagination: true as const,
    autoPageSize: false,
    columns,
    rows,
  };

  return (
    <section>
      <DataGrid {...gridProps} />
    </section>
  );
};

export default DataGrida;
