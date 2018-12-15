import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const tileData = [
    {
        img: 'https://picsum.photos/1600/900?image=0',
        title: 'Breakfast',
        author: 'jill111',
        cols: 2,
        featured: true,
    },
    {
        img: 'https://picsum.photos/1600/900?image=10',
        title: 'Tasty burger',
        author: 'director90',
    },
    {
        img: 'https://picsum.photos/1600/900?image=20',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'https://picsum.photos/1600/900?image=30',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: 'https://picsum.photos/1600/900?image=40',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'https://picsum.photos/1600/900?image=50',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: 'https://picsum.photos/1600/900?image=60',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
    },
    {
        img: 'https://picsum.photos/1600/900?image=70',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: 'https://picsum.photos/1600/900?image=80',
        title: 'Mushrooms',
        author: 'PublicDomainPictures',
    },
    {
        img: 'https://picsum.photos/1600/900?image=90',
        title: 'Olive oil',
        author: 'congerdesign',
    },
    {
        img: 'https://picsum.photos/1600/900?image=100',
        title: 'Sea star',
        cols: 2,
        author: '821292',
    },
    {
        img: 'https://picsum.photos/1600/900?image=110',
        title: 'Bike',
        author: 'danfador',
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        left: '240px',
        overflow: 'hidden',
        position: 'absolute',
        top: '66px',
        backgroundColor: theme.palette.background.paper,
        zIndex: '100',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

function SingleLineGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
