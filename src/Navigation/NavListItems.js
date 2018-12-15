import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core/';

import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SpaIcon from '@material-ui/icons/Spa';
import PaletteIcon from '@material-ui/icons/Palette';
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
    listItemPrimary: {
        color: theme.palette.primary.main,
    },
    listItemSecondary: {
        color: theme.palette.secondary.main,
    },
    listItemTertiary: {
        color: '#BADA55',
    },
    listItemFourth: {
        color: '#B000B5',
    }
});

class NavListItems extends React.Component {

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <ListItem button>
                    <ListItemIcon className={classes.listItemPrimary}>
                        <FingerprintIcon />
                    </ListItemIcon>
                    <ListItemText primary="Qui sommes-nous ?" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon className={classes.listItemSecondary}>
                        <SpaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nos valeurs" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon className={classes.listItemTertiary}>
                        <PaletteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nos réalisations" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon className={classes.listItemFourth}>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </div>
        );
    }
}

NavListItems.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavListItems);
