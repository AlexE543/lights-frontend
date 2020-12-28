import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    const BASE_URL = "http://127.0.0.1:5000"

    const [currentSong, setCurrentSong] = useState(null);
    const [currentSongImg, setCurrentSongImg] = useState(null);
    const [currentState, setCurrentState] = useState(null);

    function next(e) {
        e.preventDefault();
        fetch(BASE_URL + '/spotify/next_song', {
            method: 'GET',
        })
        fetch(BASE_URL + '/spotify/current_song', {
            method: 'GET',
        })
    }

    function previous(e) {
        e.preventDefault();
        fetch(BASE_URL + '/spotify/previous_song', {
            method: 'GET',
        })
        fetch(BASE_URL + '/spotify/current_song', {
            method: 'GET',
        })
    }

    function play(e) {
        e.preventDefault();
        fetch(BASE_URL + '/spotify/pause_play', {
            method: 'GET',
        })
        fetch(BASE_URL + '/spotify/current_song', {
            method: 'GET',
        })
    }

    useEffect(() => {
        fetch(BASE_URL + '/spotify/current_song', {
            method: 'GET'
        }).then(res => res.json())
        .then(response =>{
            console.log(response);
            console.log(response.is_playing);
            console.log(response.item.name);
            console.log(response.item.album.images[0]);
        })
    })

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <IconButton onClick={previous} aria-label="previous">
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton onClick={play} aria-label="play/pause">
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                            <IconButton onClick={next} aria-label="next">
                                <SkipNextIcon />
                            </IconButton>
                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image="https://picsum.photos/200"
                            title="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
  );
}