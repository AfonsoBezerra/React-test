import LoadingButtonMui from '@mui/lab/LoadingButton';

interface LoadingButtonProps {
  children: React.ReactNode;
  loading: boolean;
  type: 'submit';
}

export const LoadingButton = ({
  children,
  loading,
  type,
}: LoadingButtonProps) => {
  return (
    <LoadingButtonMui
      type={type}
      loading={loading}
      fullWidth
      variant="contained"
      sx={{
        mt: 3,
        mb: 2,
        backgroundColor: 'var(--color-primary)!important',
        '[role=progressbar]': {
          color: 'white',
        },
      }}
    >
      {children}
    </LoadingButtonMui>
  );
};
