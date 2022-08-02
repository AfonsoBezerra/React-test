import type { GridColDef } from '@mui/x-data-grid';
import { actionsColumn, ActionsColumnProps } from '../RowActions';

const sharedColumnsProps: GridColDef = {
  field: '',
  width: 200,
  align: 'center',
  editable: false,
  sortable: false,
  hideable: false,
  headerName: '',
  filterable: false,
  headerAlign: 'center',
  disableColumnMenu: true,
};

export const columns: (
  columnProps: ActionsColumnProps,
  t: (path: string) => string,
) => GridColDef[] = (columnProps, t) => [
  {
    ...sharedColumnsProps,
    field: 'id',
    headerName: 'ID',
    width: 100,
    sortable: true,
    sortingOrder: ['desc', 'asc'],
  },
  {
    ...sharedColumnsProps,
    field: 'title',
    headerName: t('dashboard.table.title'),
    filterable: true,
  },
  {
    ...sharedColumnsProps,
    field: 'date',
    headerName: t('dashboard.table.date'),
    filterable: true,
    width: 250,
  },
  {
    ...sharedColumnsProps,
    ...actionsColumn(columnProps),
  },
];
