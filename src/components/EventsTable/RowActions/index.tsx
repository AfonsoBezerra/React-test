import type { iEvent } from 'types/iEvent';
import type { GridColDef, GridRowId } from '@mui/x-data-grid';

import { HeaderAction } from './HeaderAction';
import { RowActions } from './RowActions';

export interface ActionsColumnProps {
  selectedIds: GridRowId[];
  setRows: React.Dispatch<React.SetStateAction<iEvent[]>>;
}

export const actionsColumn: ({
  selectedIds,
}: ActionsColumnProps) => GridColDef = ({ selectedIds, setRows }) => ({
  field: 'delete/edit',
  width: 100,

  renderHeader: () => (
    <HeaderAction selectedIds={selectedIds} setRows={setRows} />
  ),
  renderCell: (params) => <RowActions params={params} setRows={setRows} />,
});
