import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

import { useAuthContext } from '@contexts/Auth';
import { locales } from '@services/i18n';

import { ButtonTooltip } from '@components/Buttons/ButtonTooltip';
import { Select } from '@components/Input/Select';

import LogoutIcon from '@mui/icons-material/Logout';

import { ContainerCSS } from './styles';

interface HeaderProps {
  isHome: boolean;
}

export const Header = ({ isHome }: HeaderProps) => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const { logout } = useAuthContext();

  function handleLanguage(locale: string) {
    setLang(locale);
    i18n.changeLanguage(locale);
  }

  return (
    <ContainerCSS transparent={isHome}>
      {!isHome && (
        <>
          <section>
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
              LOGO
            </Typography>
          </section>
        </>
      )}

      <section>
        {!isHome && (
          <ButtonTooltip label={t('header.logout')} onClick={() => logout()}>
            <LogoutIcon />
          </ButtonTooltip>
        )}
        <Select
          sx={{ height: 40 }}
          value={lang}
          onChange={(ev) => handleLanguage(ev.target.value as string)}
          options={locales.map((lang) => {
            return {
              value: lang,
              children: (
                <img
                  className="flag"
                  alt={lang}
                  src={`/img/${lang}_flag.png`}
                />
              ),
            };
          })}
        />
      </section>
    </ContainerCSS>
  );
};
