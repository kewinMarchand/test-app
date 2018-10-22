import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core/';

const styles = theme => ({
    paper: {
        borderRadius: '50%',
        margin: 'auto',
    },
    svg: {
        height: '100%',
        width: '100%',
        x: 0,
        y: 0,
    },
    bordure: {
        cx: 150,
        cy: 150,
        r: 149,
        fill: 'none',
        stroke: theme.palette.secondary.main,
        strokeWidth: 2,
    },
    fond: {
        cx: 150,
        cy: 150,
        r: 148,
        fill: theme.palette.secondary.contrastText,
    },
    fondColor: {
        cx: 150,
        cy: 150,
        r: 135,
        fill: theme.palette.secondary.main,
    },

    orbiteGauche: {
        fill: theme.palette.secondary.contrastText,
    },
    orbiteDroite: {
        fill: theme.palette.secondary.contrastText,
    },
    irisGauche: {
        cx: 125,
        cy: 185,
        rx: 24,
        ry: 30,
        fill: theme.palette.primary.contrastText,
    },
    pupilleGauche: {
        cx: 125,
        cy: 185,
        rx: 7,
        ry: 8,
        fill: theme.palette.secondary.contrastText,
    },
    irisDroite: {
        cx: 220,
        cy: 140,
        rx: 17,
        ry: 24,
        fill: theme.palette.primary.contrastText,
    },
    pupilleDroite: {
        cx: 220,
        cy: 140,
        rx: 5,
        ry: 6,
        fill: theme.palette.secondary.contrastText,
    },
});


const visagePath = "M134,268.2c-16.5,0-34.6-2.1-53.8-6.2c-0.9,0.2-7.3,1.4-14.5,1.4c-11,0-18.3-2.9-20.8-8.5c-3.9-8.3,2.4-22.3,18.5-41.6c-1.2-3-11.6-28.5-8.2-46.2c-2.6-4.4-37.8-64.8-25.2-88c5-9.1,13.5-14,24.8-14c18,0,41.5,11.9,66.2,33.5c3.4-1.5,36.3-15.1,59.2-15.1c0.7,0,1.4,0,2.1,0c1.1-5,12.9-53.6,42.1-60.9c0.1,0,0.3-0.1,0.8-0.1c1.6,0,4.7,0.5,8.1,4.1C239.8,33.4,247,51,245,97c1.2,1.7,11.9,16.6,9.7,34.5c2.7,0.4,15.1,2.4,18.1,10.8c2.4,6.5-1.7,15.1-11.9,25.5c-0.3,2.3-3.8,26.3-20.1,50.1C225,240.9,193.7,268.2,134,268.2z",
    orbiteGauchePath = "M177.9,189.4c0.4,34.8-5.7,55.4-45.7,58.8c-37.1,3.2-63.6-26.9-66.2-61.7c-2.7-34.7,11.2-61.4,48.5-63C146.2,122.2,177.5,155.3,177.9,189.4z",
    orbiteDroitePath = "M248.8,142.2c0,31.5-22.9,64.5-38.3,64.5s-28.7-24.6-28.7-56.1c0-33.7,10.1-61.4,32.3-62.5C239,86.8,248.8,110.7,248.8,142.2z";

class Avatar extends React.Component {

    render() {
        const { classes, elevation, size } = this.props;

        return (
            <Paper
                elevation={elevation ? elevation : 0}
                className={classes.paper}
                style={{height: size ? size : 300, width: size ? size : 300}}
            >
                <svg version="1.1"  className={classes.svg} >
                    <g id="fonds">
                        <circle className={classes.bordure} />
                        <circle className={classes.fond} />
                        <circle className={classes.fondColor} />
                    </g>
                    <g id="perso">
                        <path
                            className="visage"
                            d={visagePath}
                        />
                        <g id="oeil_gauche">
                            <path
                                className={classes.orbiteGauche}
                                d={orbiteGauchePath}
                            />
                            <g id="intGauche">
                                <ellipse
                                    className={classes.irisGauche}
                                />
                                <ellipse
                                    className={classes.pupilleGauche}
                                />
                            </g>
                        </g>
                        <g id="oeil_droit">
                            <path
                                className={classes.orbiteDroite}
                                d={orbiteDroitePath}
                            />
                            <g id="intDroit">
                                <ellipse
                                    className={classes.irisDroite}
                                />
                                <ellipse
                                    className={classes.pupilleDroite}
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </Paper>
        );
    }

}

Avatar.propTypes = {
    classes: PropTypes.object.isRequired,
    elevation: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string,
};

export default withStyles(styles)(Avatar);
