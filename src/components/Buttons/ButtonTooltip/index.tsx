import { IconButton, Tooltip } from '@mui/material';

interface ButtonTooltipProps {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const ButtonTooltip = ({
  children,
  onClick,
  label,
  disabled,
  style,
}: ButtonTooltipProps) => {
  return (
    <Tooltip title={label}>
      <span>
        <IconButton
          aria-label={label}
          onClick={onClick}
          disabled={disabled}
          style={{ opacity: disabled ? 0.5 : 1, ...style }}
        >
          {children}
        </IconButton>
      </span>
    </Tooltip>
  );
};
