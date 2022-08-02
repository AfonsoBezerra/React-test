import type { iEvent } from 'types/iEvent';
import type { GridRenderCellParams } from '@mui/x-data-grid';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetcher } from '@services/fetcher';
import Swal from 'sweetalert2';

import { ButtonTooltip } from '@components/Buttons/ButtonTooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export interface ActionsColumnProps {
  setRows: React.Dispatch<React.SetStateAction<iEvent[]>>;
  params: GridRenderCellParams<any, iEvent, any>;
}

export const RowActions = ({ setRows, params }: ActionsColumnProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <ButtonTooltip
        label={t('dashboard.table.actions.deleteOne.label')}
        onClick={() => {
          Swal.fire({
            title: t('dashboard.table.actions.deleteOne.sure'),
            text: t('dashboard.table.actions.deleteOne.desc'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--color-primary)',
            cancelButtonColor: '#d33',
            confirmButtonText: t('dashboard.table.actions.deleteOne.confirm'),
            cancelButtonText: t('dashboard.table.actions.deleteOne.cancel'),
          }).then((result) => {
            if (result.isConfirmed) {
              setRows((rows) => rows.filter((row) => row.id !== params.id));
              fetcher.delete(
                `${import.meta.env.VITE_BASE_URL}/eventos_diarios/${params.id}`,
              );
              Swal.fire({
                title: t('dashboard.table.actions.deleteOne.finished'),
                icon: 'success',
              });
            }
          });
        }}
      >
        <DeleteIcon />
      </ButtonTooltip>
      <ButtonTooltip
        label={t('dashboard.table.actions.edit')}
        onClick={() => navigate(`/dashboard/event/${params.id}`)}
      >
        <EditIcon />
      </ButtonTooltip>
    </>
  );
};
