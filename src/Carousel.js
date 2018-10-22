import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, IconButton } from '@material-ui/core/';

const styles = {
  root: {
    position: 'relative',
  },
  carousel: {
    marginBottom: 100,
    marginTop: 100,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all .5s',
  },
  controls: {
    position: 'absolute',
    top: 'calc(50% - 28px)',
    left: 0,
    height: 56,
    width: '100%',
  },
  control: {
    color: "#FFF",
    margin: '0 25px',
  }
};

const images = [
  {url: "https://picsum.photos/800/450?image=100"},
  {url: "https://picsum.photos/800/450?image=200"},
  {url: "https://picsum.photos/800/450?image=300"},
  {url: "https://picsum.photos/800/450?image=400"},
  {url: "https://picsum.photos/800/450?image=500"},
  {url: "https://picsum.photos/800/450?image=600"},
  {url: "https://picsum.photos/800/450?image=700"},
  {url: "https://picsum.photos/800/450?image=800"},
  {url: "https://picsum.photos/800/450?image=00"},
  {url: "https://picsum.photos/800/450?image=1000"}
]


class Carousel extends React.Component {
  state = {
    size: 12,
  }

  prevSlide() {
    let carousel = document.querySelector('#carousel');
    let lastChild = carousel.lastChild;
    carousel.prepend(lastChild);
  }

  nextSlide() {
    let carousel = document.querySelector('#carousel');
    let firstChild = carousel.firstChild;
    carousel.appendChild(firstChild);
  }

  componentDidMount() {
    
  }

  render() {
    const { classes, nbrSlides, marginRight, children } = this.props;
    const {size} = this.state;
    return (
        <Grid 
          container 
          id="carousel"
          wrap="nowrap"
          className={classes.root}
        >
        {
          children.map(child => {
            <Grid 
              item
              xs={size} 
              className={classes.carousel}
            >
              
              child
            </Grid>
          })
        } 
        <Grid 
          item
          xs={size} 
          className={classes.carousel}
        >
          {children }
        </Grid> 
        <Grid container className={classes.controls}>
          <Grid item xs={6} align="left" >
            <IconButton onClick={this.prevSlide} className={classes.control} >
              &larr;
            </IconButton>   
          </Grid>
          <Grid item xs={6} align="right" >
            <IconButton onClick={this.nextSlide} className={classes.control} >
              &rarr;
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  nbrSlides: PropTypes.number.isRequired,
  marginRight: PropTypes.number,
};

export default withStyles(styles)(Carousel);
