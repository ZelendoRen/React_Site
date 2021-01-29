import './App.css';
import React from 'react';

import { AppBar, Container, IconButton, Toolbar, Typography, Box, Paper, Drawer, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Custom_Slider from './components/static/slider.js'
import SideBar from './components/static/menu'
import JobModule from "./components/static/job_module.js";
import Footer from './components/static/footer'
import AboutCompany from './components/static/aboutCompany'

const useStyles = makeStyles((theme) => ({
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <SideBar />
      <main>
        <Custom_Slider />
        <JobModule />
        <AboutCompany />
      </main>
      <Footer />
    </>
  );
}

export default App;
