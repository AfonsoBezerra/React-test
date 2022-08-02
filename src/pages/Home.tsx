import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useAuthContext } from '@contexts/Auth';

import { Input } from '@components/Input';
import { LoadingButton } from '@components/Buttons/LoadingButton';
import { CarouselImages } from '@components/Carousel/CarouselImages';

const imagesEvents = [
  { src: '/img/event-image.jpg', alt: 'Várias pessoas em uma festa.' },
  { src: '/img/event-image2.jpg', alt: 'Várias pessoas em uma festa.' },
  { src: '/img/event-image3.jpg', alt: 'Várias pessoas em uma festa.' },
];

export const Home = () => {
  const { t } = useTranslation();
  const { signIn, loading } = useAuthContext();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    signIn(
      {
        email: data.get('email') as string,
        password: data.get('password') as string,
      },
      '/dashboard',
    ).catch(() => {
      setErrorEmail(true);
      setErrorPassword(true);
    });
  }

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <CarouselImages images={imagesEvents} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mx: 4,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
              {t('signIn.title')}
            </Typography>
            <Typography component="h2" variant="h6" sx={{ opacity: 0.8 }}>
              {t('signIn.description')}
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Input
                id="email"
                label={t('signIn.fields.email')}
                name="email"
                type="email"
                error={errorEmail}
                onChange={() => setErrorEmail(false)}
                autoComplete="email"
              />
              <Input
                name="password"
                label={t('signIn.fields.password')}
                type="password"
                id="password"
                error={errorPassword}
                onChange={() => setErrorPassword(false)}
                autoComplete="current-password"
              />
              <LoadingButton type="submit" loading={loading}>
                {t('signIn.button')}
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
