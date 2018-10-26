import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: orange[500]
        },
        tertiary: {
            main: '#333333',
        },
        background: {
            default: '#FFFFFF',
        }
    },
});

