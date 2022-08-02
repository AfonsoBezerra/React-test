import type { iEvent, iEventSubmit } from 'types/iEvent';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import enLocale from 'date-fns/locale/en-US';
import ptBRLocale from 'date-fns/locale/pt-BR';

import { LoadingButton } from '@components/Buttons/LoadingButton';
import { Input } from '@components/Input';
import { fetcher } from '@services/fetcher';

const localeMap: { [key: string]: typeof ptBRLocale } = {
  en: enLocale,
  'pt-BR': ptBRLocale,
};

interface EventFormProps {
  event?: iEvent;
}
export const EventForm = ({ event }: EventFormProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setDate((event && new Date(event.date)) || new Date());
    setTime((event && new Date(event.date)) || new Date());
  }, [event]);

  function handleChange<T>(value: T, set: (value: T) => void) {
    set(value);
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    const data = new FormData(ev.currentTarget);
    const dateSplit = (data.get('date') as string).split('/');
    const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
    const timeFormatted = `${(data.get('time') as string).split(' ')[0]}:00`;

    const eventSubmit: iEventSubmit = {
      titulo: data.get('title') as string,
      cor: data.get('color') as string,
      data: `${dateFormatted} ${timeFormatted}`,
      descricao: data.get('description') as string,
    };

    if (event) {
      fetcher
        .put(
          `${import.meta.env.VITE_BASE_URL}/eventos_diarios/${event.id}`,
          eventSubmit,
        )
        .then((res) => {
          enqueueSnackbar(t('alert.eventUpdate'), { variant: 'success' });
          navigate('/dashboard');
          return res;
        })
        .catch((res) => {
          enqueueSnackbar(t('alert.errorForbidden'), { variant: 'error' });
          navigate('/');
          return res;
        });
    } else {
      fetcher
        .post(`${import.meta.env.VITE_BASE_URL}/eventos_diarios`, eventSubmit)
        .then((res) => {
          enqueueSnackbar(t('alert.eventCreate'), { variant: 'success' });
          navigate('/dashboard');
          return res;
        })
        .catch((res) => {
          enqueueSnackbar(t('alert.errorForbidden'), { variant: 'error' });
          navigate('/');
          return res;
        });
    }
    setLoading(false);
  }

  return (
    <LocalizationProvider
      adapterLocale={localeMap[i18n.language]}
      dateAdapter={AdapterDateFns as any}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Input
          label={t('event.fields.title')}
          name="title"
          inputValue={event?.title || ''}
        />
        <section style={{ display: 'flex' }}>
          <MobileDatePicker
            label={t('event.fields.date')}
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={(ev: any) => handleChange(ev, setDate)}
            renderInput={(params: any) => <Input name="date" {...params} />}
            disablePast
          />
          <MobileTimePicker
            label={t('event.fields.time')}
            value={time}
            onChange={(ev: any) => handleChange(ev, setTime)}
            renderInput={(params: any) => <Input name="time" {...params} />}
          />
          <Input
            type="color"
            name="color"
            inputValue={event?.color || ''}
            style={{ width: '30%' }}
            label={t('event.fields.color')}
          />
        </section>
        <Input
          name="description"
          multiline
          rows={10}
          inputValue={event?.description || ''}
          label={t('event.fields.description')}
        />

        <LoadingButton type="submit" loading={loading}>
          {t('event.submit')}
        </LoadingButton>
      </Box>
    </LocalizationProvider>
  );
};
