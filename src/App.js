import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import './App.css';
import Navbar from './Navbar'
import Content from './Content'
import Carousel from './Carousel'

const theme = createMuiTheme({
    palette: {
        primary: { main: teal[500] },
        secondary: { main: orange[500] },
    },
});

const images = [
  {url: "https://picsum.photos/800/450?image=100"},
  {url: "https://picsum.photos/800/450?image=200"},
  {url: "https://picsum.photos/800/450?image=300"},
  {url: "https://picsum.photos/800/450?image=400"},
  {url: "https://picsum.photos/800/450?image=500"},
  {url: "https://picsum.photos/800/450?image=600"},
  {url: "https://picsum.photos/800/450?image=700"},
  {url: "https://picsum.photos/800/450?image=800"},
  {url: "https://picsum.photos/800/450?image=900"},
  {url: "https://picsum.photos/800/450?image=1000"}
]
class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider theme={theme}>
            <Navbar/>
            <Content/>
            <Carousel nbrSlides={1} marginRight={50}>
              { 
              images.map((image) => (
                  <img 
                    key={image.url} 
                    src={image.url} 
                    alt="" 
                  />
              ))
              }   
            </Carousel>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
