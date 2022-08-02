import type { iEvent } from 'types/iEvent';
import {
  DataGrid,
  GridToolbarFilterButton,
  enUS,
  ptBR,
  type GridRowId,
  type GridLocaleText,
} from '@mui/x-data-grid';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { columns } from './utils/columns';
import { ContainerCSS } from './styles';

interface EventsTableProps {
  events: iEvent[];
}

const localeMap: { [key: string]: Partial<GridLocaleText> } = {
  en: enUS.components.MuiDataGrid.defaultProps.localeText,
  'pt-BR': ptBR.components.MuiDataGrid.defaultProps.localeText,
};

export const EventsTable = ({ events }: EventsTableProps) => {
  const { t, i18n } = useTranslation();
  const [selectedIds, setSelectedIds] = useState<GridRowId[]>([]);
  const [rows, setRows] = useState<iEvent[]>(events);

  useEffect(() => {
    setRows(events);
  }, [events]);

  return (
    <ContainerCSS>
      <DataGrid
        rows={rows}
        columns={columns({ selectedIds, setRows }, t)}
        pageSize={9}
        components={{ Toolbar: GridToolbarFilterButton }}
        initialState={{
          sorting: { sortModel: [{ field: 'id', sort: 'desc' }] },
        }}
        checkboxSelection
        rowsPerPageOptions={[9]}
        onSelectionModelChange={(id) => setSelectedIds(id)}
        disableSelectionOnClick
        localeText={localeMap[i18n.language]}
        sx={{
          '.MuiButton-text, .Mui-checked': {
            color: 'var(--color-primary)!important',
          },
        }}
      />
    </ContainerCSS>
  );
};
