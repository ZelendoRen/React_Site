import React from 'react';
import { Grid, Container, Typography, Button, } from '@material-ui/core';
import useStyles from "../../styles/companyHistory_styles";
import abouy_company from '../../img/history_image.png'

export default function CompanyHistory() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainBox}>
            <Grid item className={classes.aboutContent}>
                <img className={classes.aboutContent_image} src={abouy_company}></img>
                <div className={classes.aboutContent_textBlock} >
                    <Typography className={classes.aboutContent_title} variant={'h4'}>
                        Love Forever - брачное агентсво будущего
                    </Typography>
                    <Typography className={classes.aboutContent_text}>
                        Информация об агнетсве для чайников Информация ормация об агнетсве для чайников Информация об агнетсве для чайне для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников
                    </Typography>
                    <Typography className={classes.aboutContent_text}>
                        Информация об агнетсве для чайников Информация ормация об агнетсве для чайников Информация об агнетсве для чайне для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников
                    </Typography>
                    <Typography className={classes.aboutContent_text}>
                        Информация об агнетсве для чайников Информация ормация об агнетсве для чайников Информация об агнетсве для чайне для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников Информация об агнетсве для чайников
                    </Typography>
                </div>


            </Grid>
        </ Grid >
    )
}