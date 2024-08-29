import { createTheme } from '@mui/material/styles';
import { colors } from './styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    text: {
      primary: colors.text,
    },
  },
  shape: {
    borderRadius: 2,
  },
  spacing: 8,
});

export default theme;