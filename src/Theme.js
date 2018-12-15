import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: { main: teal[500] },
        secondary: { main: orange[500] },
    },
    typography: {
        useNextVariants: true,
    },
});

export default theme;
