import { SxProps, Theme } from '@mui/material';
import ButtonMUI from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  styles?: SxProps<Theme>;
  icon?: React.ReactNode;
  type?: 'submit' | 'button';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  icon,
  href,
  styles,
  onClick,
  children,
}: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <ButtonMUI
      size="large"
      variant="contained"
      role={href ? 'link' : 'button'}
      endIcon={icon}
      type={type}
      onClick={() => {
        if (href) navigate(href);
        if (onClick) onClick();
      }}
      sx={{
        ...styles,
        width: 'fit-content',
        borderRadius: '0.6rem',
        backgroundColor: 'var(--color-primary)',
        ':hover': { backgroundColor: 'var(--color-primary)' },
      }}
    >
      {children}
    </ButtonMUI>
  );
};
