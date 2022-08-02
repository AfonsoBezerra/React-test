import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '@contexts/Auth';

import { Main } from '@components/Main';
import { EventForm } from '@components/EventForm';
import { fetcher } from '@services/fetcher';
import { iEvent, iEventResponse } from 'types/iEvent';

export const Event = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const { id } = useParams();

  const [event, setEvent] = useState<iEvent | undefined>(undefined);

  useEffect(() => {
    if (id) {
      fetcher
        .get(`${import.meta.env.VITE_BASE_URL}/eventos_diarios/${id}`)
        .then((res: iEventResponse) => {
          setEvent({
            id: res.id,
            title: res.titulo,
            date: res.data,
            description: res.descricao,
            color: res.cor,
          });
          return res;
        })
        .catch((res) => {
          navigate('/dashboard');
          return res;
        });
    }
  }, []);

  return (
    <Main>
      <section className="event mx-w">
        <div className="info-row">
          <p>
            {t('dashboard.logged')} <span>{user?.email}</span>
          </p>
        </div>
        <EventForm event={event} />
      </section>
    </Main>
  );
};
