import type { iEvent } from 'types/iEvent';
import type { GridRowId } from '@mui/x-data-grid';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { fetcher } from '@services/fetcher';
import Swal from 'sweetalert2';

import { ButtonTooltip } from '@components/Buttons/ButtonTooltip';
import DeleteIcon from '@mui/icons-material/Delete';

export interface HeaderActionProps {
  selectedIds: GridRowId[];
  setRows: React.Dispatch<React.SetStateAction<iEvent[]>>;
}

export const HeaderAction = ({ selectedIds, setRows }: HeaderActionProps) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <ButtonTooltip
      label={t('dashboard.table.actions.deleteSelects.label')}
      onClick={() => {
        const rowsIds = new Set(selectedIds);
        if (rowsIds.size > 0) {
          Swal.fire({
            title: t('dashboard.table.actions.deleteSelects.sure'),
            text: t('dashboard.table.actions.deleteSelects.desc'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--color-primary)',
            cancelButtonColor: '#d33',
            confirmButtonText: t(
              'dashboard.table.actions.deleteSelects.confirm',
            ),
            cancelButtonText: t('dashboard.table.actions.deleteSelects.cancel'),
          }).then((result) => {
            if (result.isConfirmed) {
              setRows((rows) => rows.filter((row) => !rowsIds.has(row.id)));
              rowsIds.forEach((id) =>
                fetcher.delete(
                  `${import.meta.env.VITE_BASE_URL}/eventos_diarios/${id}`,
                ),
              );
              Swal.fire({
                title: t('dashboard.table.actions.deleteSelects.finished'),
                icon: 'success',
              });
            }
          });
        } else {
          enqueueSnackbar(t('alert.noneSelected'), {
            variant: 'warning',
          });
        }
      }}
    >
      <DeleteIcon />
    </ButtonTooltip>
  );
};
