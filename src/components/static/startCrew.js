import { Container, Typography, Button } from '@material-ui/core';
import useStyles from "../../styles/startCrew_styles.js";
import React from 'react';



export default function StartCrew(data) {
    let content = data.data
    const classes = useStyles();
    return (
        <div className={classes.mainBlock}>

            <Container className={classes.mainBlock_content}>
                <div className={classes.mainBlock_contet_textContent}>
                    <Typography className={classes.mainBlock_title} variant={'h4'}>
                        {content.title}
                    </Typography>
                    <Typography className={classes.text}>
                        {content.text}
                    </Typography>
                    <Button className={classes.button} variant="contained" color="primary">
                        Присоедениться
                    </Button>
                </div>
                <img className={classes.image} src={content.img}></img>
            </Container>

        </div>
    )
};