import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Grid, Paper, Typography } from '@material-ui/core/';
import Dashboard from '@material-ui/icons/Dashboard'
import Config from '../config/Config'
import Paragraphe from './Paragraphe'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        margin: 'auto',
        maxWidth: 600,
        minHeight: '300vh',
        paddingTop: theme.spacing.unit * 8,
        paddingBottom: theme.spacing.unit * 2,
    },
    image: {
        display: 'block',
        margin: 'auto',
        marginBottom: 102,
        marginTop: 102,
    },
    title: {
        borderTop: '2px solid ' + theme.palette.secondary.main,
        marginBottom: 30,
        paddingTop: 30,
    },
    subtitle: {
        marginBottom: 30,
        '& >a': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',
        }
    },
    inline: {
        display: 'inline-block',
        paddingLeft: 5,
        position: 'relative',
        top: 5,
    }
});

function Content(props) {
    const { classes } = props;
    return (
        <Grid item xs={12}>
            <Paper className={classes.root} elevation={1}>
                <img src={Config.logoBig}
                     width="312"
                     height="296"
                     alt="Purjus Communication"
                     className={classes.image}
                />
                <Typography variant="h5" component="h3" className={classes.title}>
                    À partir d'ici, la nav va disparaître et réapparaître lorsqu'on remonte !
                </Typography>
                <Typography variant="body2" className={classes.subtitle}>
                    Le code du composant est visible <a href="https://github.com/kewinMarchand/test-app/blob/master/src/Navigation/Navbar.js" target="_blank" rel="noopener noreferrer">à cette adresse</a>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Vous pouvez changer l'apparence de la barre de navigation avec le switch
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Vous pouvez accèder à la page d'administration ou à la page des utilisateurs en cliquant sur l'icône
                    <Typography 
                        component="span" 
                        className={classes.inline}
                    >
                        <Dashboard color="secondary"/>
                    </Typography>
                </Typography>
                <Paragraphe />
                <Paragraphe />
                <Paragraphe />
                <Paragraphe />
                <Paragraphe />
                <Paragraphe />
            </Paper>
        </Grid>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
