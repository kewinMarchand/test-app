import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import './App.css';
import Navbar from './Navbar'
import Content from './Content'
import Joyride from 'react-joyride'
import { ACTIONS, EVENTS } from 'react-joyride/es/constants'
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[500],
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: orange[500],
            contrastText: '#FFFFFF',
        },

    },
    text: {
        main: '#333333',
        light: '#BDBDBD',
    },
    overlay: {
        light: 'rgba(0,84,164,0.15)',
    },
    shadows: [
        'none',
        '0px 1px 2px -1px   rgba(0,84,164,0.15)',
        '0px 1px 3px 0px    rgba(0,84,164,0.15)',
        '0px 2px 5px -1px   rgba(0,84,164,0.15)',
        '0px 2px 6px 0px    rgba(0,84,164,0.15)',
        '0px 3px 8px -1px   rgba(0,84,164,0.15)',
        '0px 3px 9px 0px    rgba(0,84,164,0.15)',
        '0px 4px 11px -1px  rgba(0,84,164,0.15)',
        '0px 4px 12px 0px   rgba(0,84,164,0.15)',
        '0px 5px 14px -1px  rgba(0,84,164,0.15)',
        '0px 5px 15px 0px   rgba(0,84,164,0.15)',
        '0px 6px 17px -1px  rgba(0,84,164,0.15)',
        '0px 6px 18px 0px   rgba(0,84,164,0.15)',
        '0px 7px 20px -1px  rgba(0,84,164,0.15)',
        '0px 7px 21px 0px   rgba(0,84,164,0.15)',
        '0px 8px 23px -1px  rgba(0,84,164,0.15)',
        '0px 8px 24px 0px   rgba(0,84,164,0.15)',
        '0px 9px 26px -1px  rgba(0,84,164,0.15)',
        '0px 9px 27px 0px   rgba(0,84,164,0.15)',
        '0px 10px 29px -1px rgba(0,84,164,0.15)',
        '0px 10px 30px 0px  rgba(0,84,164,0.15)',
        '0px 11px 32px -1px rgba(0,84,164,0.15)',
        '0px 11px 33px 0px  rgba(0,84,164,0.15)',
        '0px 12px 35px -1px rgba(0,84,164,0.15)',
        '0px 12px 36px 0px  rgba(0,84,164,0.15)',
    ],
    shape: {borderRadius: 6}
});

class App extends Component {

    state = {
        run: false,
        stepIndex: 0,
    };

    handleClickStart = e => {
        e.preventDefault();
        this.setState({
            run: true
        });
    };

    componentDidMount() {
        this.setState({ run: true });
    }

    callback = (tour) => {
        const { action, index, type } = tour;

        if (type === EVENTS.STEP_AFTER ) {
            this.setState({ stepIndex: this.state.stepIndex + 1 });
        }
    };

  render() {
        const {stepIndex} = this.state
    return (
      <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar handleClickStart={this.handleClickStart}/>
            <Content/>
              <Joyride
                  steps={steps}
                  stepIndex={stepIndex}
                  run={this.state.run}
                  continuous
                  showProgress
                  showSkipButton
                  callback={this.callback}
                  locale={{back: 'Retour', close: 'Fermer', last: 'Dernier', next: 'Prochain', skip: 'Passer cette étape' }}
                  styles={{
                      options: options,
                      spotlight: {
                          borderRadius: theme.shape.borderRadius,
                      }
                  }}

              />
              <Button onClick={this.handleClickStart}>Click</Button>
          </MuiThemeProvider>
      </div>
    );
  }
}

const steps = [
    {
        target: '[data-tuto="tuto_start"]',
        content: <h1>hello !!!!</h1>,
        disableBeacon: true,
        placement: 'left',
    },
    {
        target: '[data-tuto2="tuto_step"]',
        content: <h2>Deuxième étape au même endroit</h2>,
        disableBeacon: true,
        placement: 'right'
    },
    {
        target: '[data-tuto="tuto_step2"]',
        content: <h1>Troisième étape !!!</h1>,
        disableBeacon: true,
    },
]


const options = {
    arrowColor: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.contrastText,
    overlayColor: theme.overlay.light,
    primaryColor: theme.palette.primary.main,
    textColor: theme.text.main,
    width: 900,

}



export default App;
