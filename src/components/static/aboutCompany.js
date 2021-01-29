import { Grid, Container, Typography, List, ListItem, Button, TextField, IconButton, Paper } from '@material-ui/core';
import useStyles from "../../styles/aboutCompany_styles";
import React from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import abouy_company from '../../img/abouy_company.png'

export default function AboutCompany() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainBox}>
            <Grid item className={classes.aboutContent}>
                <img src={abouy_company}></img>
                <div className={classes.aboutContent_textBlock} >
                    <Typography className={classes.aboutContent_title} variant={'h4'}>
                        Love Forever - брачное агентсво будущего
                    </Typography>
                    <Typography className={classes.aboutContent_text}>
                        Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников
                    </Typography>
                    <Button className={classes.aboutContent_button} variant="contained" color="primary"> Узнать больше</Button>
                </div>


            </Grid>
        </ Grid >
    )
}