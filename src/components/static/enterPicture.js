import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Drawer, Grid, ListItem, Typography, Button } from '@material-ui/core';
import useStyles from "../../styles/enterPicture_styles";

export default function EnterPicture() {
    const classes = useStyles();

    return (
        <div className={classes.picture_block}>
            <div className={classes.contentBlock}>

                <div className={classes.contentBlock_textContainer} >
                    <p className={classes.contentBlock_header}>
                        Love Forever
                </p>
                    <p className={classes.contentBlock_text}>
                        Твоя уверенность и финансовая стабильность
                </p>
                </div>

            </div>
        </div>
    )
}
