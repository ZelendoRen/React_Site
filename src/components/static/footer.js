import { Grid, Container, Typography, List, ListItem, Button, TextField, IconButton, Paper } from '@material-ui/core';
import useStyles from "../../styles/footer_styles";
import React from 'react';
import { menuData } from '../../data/data';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";



export default function Footer() {
    const classes = useStyles();
    return (
        <>

            <Grid container className={classes.footerBox}>
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={4} className={classes.footer_firstBlock} >
                        <Typography className={classes.footer_title}>Остались какие то вопросы? Просто позвоните:</Typography>
                        <Button className={classes.footer_phone}>+38(097) 62 263 31 </Button>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.footer_firstBlock}>
                        <Typography className={classes.footer_title}>Навигация</Typography>

                        <List >
                            {menuData.map((menuData) => (

                                <ListItem button className={classes.menu_items}><Link className={classes.menuItem} to={menuData.url}>{menuData.title}</Link></ListItem>
                            ))}
                        </List>

                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.footer_recall}>
                        <Typography className={classes.footer_title}>Заказать звонок</Typography>
                        <div className={classes.footer_form}>
                            <TextField className={classes.footer_form_field} size='small' id="name" label="Имя" />
                            <TextField className={classes.footer_form_field} size='small' id="phone" label="Номер телефона" />
                            <Button className={classes.footer_form_button} variant="contained" color="primary"> Заказать</Button>
                        </div>


                    </Grid>
                </Grid>
                <Grid container spacing={0} xs={12} className={classes.footer_bottom}>
                    <Grid item xs={12} className={classes.footer_bottom_icons} spacing={0}>
                        <IconButton size="small" className={classes.menu_socialMedia_block}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton size="small" className={classes.menu_socialMedia_block}>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton size="small" className={classes.menu_socialMedia_block}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton size="small" className={classes.menu_socialMedia_block}>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.footer_bottom_text} >
                        <Typography className={classes.footer_bottom_title}>
                            2021  © All rights reserved
                        </Typography>
                        <Typography className={classes.footer_bottom_title}>
                            Devoloped by ZelendoRen
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )

}