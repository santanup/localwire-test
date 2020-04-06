import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#184f9c',
    },
    secondary: {
      main: '#81daf9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F9F9F9',
    },
  },
  typography: {
    h6: {
      fontSize: "1.15rem"
    },
    body1: {
      fontSize: "0.95rem"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'capitalize'
      }
    },
    PrivateTabIndicator: {
      root: {
        // width: 'calc( 100% - 18px )'
        background: 'transparent !important',
        height: 3,
        '& span': {
          display: 'block',
          height: '100%',
          width: 'calc( 100% - 16px )',
          background: '#556cd6',
          margin: 'auto',
          borderRadius: '2px 2px 0px 0px'
        }
      }
    }
  }
});

export default theme;
