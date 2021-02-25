import React from 'react';
import { Grid, TextField, Typography, Button, } from '@material-ui/core';
import useStyles from "../../styles/form_styles";
import form from '../../img/form.png'

export default function Form() {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainBox}>
            <Grid item className={classes.aboutContent}>
                <img className={classes.aboutContent_image} src={form}></img>
                <div className={classes.aboutContent_textBlock} >
                    <Typography className={classes.aboutContent_title} variant={'h4'}>
                        Есть вопросы? Задай их прямо сейчас!
                    </Typography>
                    <div className={classes.form}>
                        <TextField className={classes.form_params} id="outlined-basic" label="ФИО" variant="outlined" />
                        <TextField className={classes.form_params} id="outlined-basic" label="Телефон" variant="outlined" />
                        <TextField className={classes.form_question} id="outlined-basic" label="Ваш вопрос" multiline rows={4} variant="outlined" />
                        <Button className={classes.form_button} variant="contained" color="primary">Задать вопрос</Button>
                    </div>
                </div>


            </Grid>
        </ Grid >
    )
}