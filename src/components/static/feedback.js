import { Grid, Container, Typography, List, ListItem, Button, TextField, IconButton, Paper } from '@material-ui/core';
import useStyles from "../../styles/feedback_styles";
import React from 'react';
import { feedback_data } from '../../data/feedback_data';



export default function Feedback() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.mainBlcok}>
            {feedback_data.map((feedback_data) => (
                <Grid item md={6} xs={12} >
                    <Paper className={classes.feedback_block}>
                        <img className={classes.feedback_image} src={feedback_data.avatar} />
                        <div className={classes.feedback_textblcok}>
                            <div className={classes.feedback_textblcok_headers}>
                                <Typography className={classes.feedback_textblcok_name}>{feedback_data.name}</Typography>
                                <Typography className={classes.feedback_textblcok_status}>{feedback_data.status}</Typography>
                            </div>
                            <Typography className={classes.feedback_textblcok_text}>{feedback_data.content}</Typography>
                        </div>
                    </Paper>

                </Grid>
            ))}

        </Grid>
    )
};