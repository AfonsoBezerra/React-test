import type { iEventResponse, iEvent } from 'types/iEvent';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuthContext } from '@contexts/Auth';
import { fetcher } from '@services/fetcher';

import { EventsTable } from '@components/EventsTable';
import { Button } from '@components/Buttons/Button';
import { Main } from '@components/Main';

export const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [events, setEvents] = useState<iEvent[]>([]);

  useEffect(() => {
    fetcher
      .get(`${import.meta.env.VITE_BASE_URL}/eventos_diarios`)
      .then((res: iEventResponse[]) => {
        setEvents(
          res.map((event) => {
            const dateFullSplit = event.data.split(' ');
            const dateSplit = dateFullSplit[0].split('-');
            const dateFormatted = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
            const dateFull = `${dateFormatted} ${dateFullSplit[1]}`;

            return {
              id: event.id,
              title: event.titulo,
              date: dateFull,
              description: event.descricao,
              color: event.cor,
            };
          }),
        );
        return res;
      })
      .catch((res) => {
        // Do something
        return res;
      });
  }, []);

  return (
    <Main>
      <section className="dashboard mx-w">
        <div className="info-row">
          <p>
            {t('dashboard.logged')} <span>{user?.email}</span>
          </p>
          <Button onClick={() => navigate('/dashboard/event')}>
            {t('dashboard.buttonAdd')}
          </Button>
        </div>
        <EventsTable events={events} />
      </section>
    </Main>
  );
};
