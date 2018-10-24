import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import './App.css';
import Navbar from './Navbar'
import Content from './Content'
import Tour from "reactour";
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        primary: { main: teal[500] },
        secondary: { main: orange[500] },
    },
});

class App extends Component {
    state = {
        isTourOpen: false,
        isShowingMore: false
    };

    closeTour = () => {
        this.setState({ isTourOpen: false });
    };

    openTour = () => {
        this.setState({ isTourOpen: true });
    };

  render() {
      const {isTourOpen} = this.state
      const accentColor = '#5cb7b7'
    return (
      <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar openTour={this.openTour}/>
            <Content/>
              <Tour
                  steps={steps}
                  isOpen={isTourOpen}
                  onRequestClose={this.closeTour}
                  maskClassName="mask"
                  className="helper"
                  rounded={5}
                  accentColor={accentColor}
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
        content: () => <div><h1>hello !!!!</h1></div>,
        style: {
            backgroundColor: "black",
            color: "white",
            height: 150
        }
    },
]

export default App;
