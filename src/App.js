import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navbar from './Navbar'
import Content from './Content'
import Tour from "reactour";
import {withStyles, Button} from '@material-ui/core/';

import theme from './Theme'


const styles = () => ({
    helper: {
        background: theme.palette.background.default,
        boxSizing: 'border-box',
        border: '1px solid ' + theme.palette.primary.main,
        color: theme.palette.tertiary.main,
        '& > [data-tour-elem="controls"]' : {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }

    }
})

class App extends Component {
    state = {
        isTourOpen: false,
        isShowingMore: false,
        currentStep: 0
    };

    closeTour = () => {
        this.setState({ isTourOpen: false });
    };

    openTour = () => {
        this.setState({ isTourOpen: true });
    };

    componentDidMount() {
        this.setState({ isTourOpen: true });
    }

  render() {
      const {isTourOpen} = this.state
      const {classes} = this.props
      const accentColor = theme.palette.primary.main
    return (
      <div className="App" data-tut="reactour__start">
          <MuiThemeProvider theme={theme}>
            <Navbar openTour={this.openTour}/>
            <Content/>
              <Tour
                  steps={steps}
                  isOpen={isTourOpen}
                  onRequestClose={this.closeTour}
                  maskClassName="mask"
                  className={classes.helper}
                  rounded={5}
                  maskSpace={5}
                  startAt={this.state.currentStep}
                  accentColor={accentColor}
                  showNavigation={false}
                  showNumber={false}
                  prevButton={<Button color="secondary" variant="contained">Précédent</Button>}
                  nextButton={<Button color="primary" variant="contained">Suivant</Button>}
                  lastStepNextButton={<Button color="primary" variant="contained">Fermer</Button>}
              />
              <Button onClick={this.openTour}>click</Button>
          </MuiThemeProvider>
      </div>
    );
  }
}


const steps = [
    {
        selector: '[data-tut="reactour__start"]',
        content: () =>
            <div>
                <h1>Bienvenue !! Vous allez comprendre comment ça marche..</h1>
                <h2>Vous visitez un site de test fait avec React et Material Ui</h2>
            </div>,
        style: {
            height: '80vh',
            margin: ' auto',
            maxWidth: '90vw',
            width: '90vw',

        },
        position: 'center',
    },
    {
        selector: '[data-tut="reactour__image"]',
        content: () =>
            <div>
                <h1>Voici une image</h1>
            </div>,
        style: {

        },
        position: 'left',
    },
    {
        selector: '[data-tut="reactour__title"]',
        content: () =>
            <div>
                <h1>Voici un titre</h1>
            </div>,
        style: {

        },
        position: 'top',
    },
]

App.proptypes = {
    classes: PropTypes.any.isRequired,
}

export default withStyles(styles)(App);
