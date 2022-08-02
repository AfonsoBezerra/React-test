import {
  FormControl,
  MenuItem,
  Select as SelectMui,
  SelectProps as SelectPropsMui,
} from '@mui/material';

interface SelectProps extends SelectPropsMui {
  options: {
    value: string;
    children: React.ReactNode;
  }[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <FormControl
      sx={{
        minWidth: 0,
        '& .Mui-focused fieldset': {
          borderColor: 'var(--color-primary)!important',
        },
      }}
    >
      <SelectMui {...rest}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.children}
          </MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  );
};
