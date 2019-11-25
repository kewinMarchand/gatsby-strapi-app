import { createMuiTheme } from '@material-ui/core/styles'

import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const Theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
    },
    typography: {
        h1: {
            fontSize: '2rem'
        },
        h2: {
            fontSize: '1.8rem'
        },
        h3: {
            fontSize: '1.6rem'
        },
        h4: {
            fontSize: '1.4rem'
        },
        h5: {
            fontSize: '1.2rem'
        },
        h6: {
            fontSize: '1rem'
        }
    },
    status: {
      danger: 'orange',
    }
  });

export default Theme