import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Drawer, Grid, ListItem, Typography, Button } from '@material-ui/core';
import useStyles from "../../styles/product_start_styles";

export default function ProductStart() {
    const classes = useStyles();

    return (
        <div className={classes.picture_block}>
            <div className={classes.contentBlock}>
                <div className={classes.contentBlock_textContainer} >
                    <p className={classes.contentBlock_header}>
                        IT решения для брачного бизнеса
                </p>
                    <p className={classes.contentBlock_text}>
                        Один из лучших и самых современных софтов, созданный специально для каждого из ресурсов, с вожмностью контроля и просмотра статистики
                </p>
                </div>
            </div>
        </div>
    )
}
