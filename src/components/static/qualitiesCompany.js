import { Grid, Typography } from '@material-ui/core';
import useStyles from "../../styles/qualitiesCompany_styles";
import React from 'react';
import { qualitiesData } from '../../data/qualities_data'

export default function Qualities() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainBox} md={12}>
            {qualitiesData.map((qualitiesData) => (
                <Grid item className={classes.qualitieBlock} md={3}>
                    <div className={classes.qualitieBlock_title}>
                        <Typography className={classes.qualitieBlock_title_number}>{qualitiesData.number}</Typography>
                        <Typography className={classes.qualitieBlock_title_title}> {qualitiesData.title}</Typography>
                    </div>
                    <Typography className={classes.qualitieBlock_title_text}>{qualitiesData.text}</Typography>
                </Grid>
            ))}


        </ Grid >
    )
}