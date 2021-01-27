import './App.css';
import React from 'react';

import { AppBar, Container, IconButton, Toolbar, Typography, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Custom_Slider from './components/static/slider.js'
const AutoplaySlider = withAutoplay(AwesomeSlider);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1),

  },
  title: {
    flexGrow: 1
  },
  appbar: {
    "background-color": "rgba(0,0,0,0)",
    'box-shadow': 'none',
    margin: 0,
    top: 5
  },
  toolbar: {
    padding: 0,

    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between"

  },
  container_Slider: {
    "margin-top": "50px",
    height: window.innerHeight + 'px'

  },
  slider: {
    'position': 'relative',
    'height': '100%',
    'overflow': 'hidden'
  },
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar} >
        <Container maxWidth="xl" className={classes.container} >
          <Toolbar className={classes.toolbar} >
            <IconButton onClick={() => { alert() }} aria-label="menu" size="medium" className={classes.menuButton}>
              <MenuRoundedIcon fontSize='large' />
            </IconButton>
            <IconButton aria-label="call" size="medium" className={classes.menuButton}>
              <CallRoundedIcon fontSize='large' />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Custom_Slider />
        <Paper>
          <Typography>
          </Typography>
        </Paper>

      </main>

    </>

  );
}

export default App;
