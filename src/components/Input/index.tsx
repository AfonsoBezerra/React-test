import { useEffect, useState } from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  type StandardTextFieldProps,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputProps extends StandardTextFieldProps {
  multiline?: boolean;
  checked?: boolean;
  onChange?: () => void;
  inputValue?: string;
  label?: string;
}

export const Input = ({
  type,
  multiline,
  inputValue,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(inputValue || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setValue(inputValue || '');
  }, [inputValue]);

  const sx = {
    m: '0.5rem 0',
    marginRight: '1rem',
    '& .Mui-focused:not(.Mui-error)': {
      color: 'var(--color-primary)',
      fieldset: {
        borderColor: 'var(--color-primary)',
      },
      input: {
        color: 'black',
      },
      textarea: {
        color: 'black',
      },
    },

    '&:last-child': {
      marginRight: '0',
    },
  };

  return multiline ? (
    <TextField
      {...props}
      multiline
      margin="normal"
      required
      fullWidth
      value={value}
      onChange={(e) => setValue(e.target.value)}
      sx={sx}
    />
  ) : (
    <TextField
      {...props}
      margin="normal"
      required
      fullWidth
      type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
      sx={sx}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
