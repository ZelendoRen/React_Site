import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Drawer, List, ListItem, Typography, Button } from '@material-ui/core';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyles from "../../styles/menu_styles";
import { menuData } from '../../data/data';
export default function SideBar() {
    const classes = useStyles();

    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const list = () => (
        <div onClick={toggleDrawer(false)} className={classes.itemlist}>
            <Typography className={classes.menu_title}> Love Forever</Typography>

            <List >
                {menuData.map((menuData) => (
                    <ListItem button>{menuData.title}</ListItem>
                ))}

                <Button className={classes.menu_support} variant="contained" color="primary">Отправить заявку</Button>
                <List className={classes.menu_socialMedia}>
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
                </List>
            </List>
        </div>

    )
    return (
        <AppBar position="fixed" className={classes.appbar} >
            <Container maxWidth="xl" className={classes.container} >
                <Toolbar className={classes.toolbar} >
                    <IconButton onClick={toggleDrawer(true)} aria-label="menu" size="medium" className={classes.menuButton}>
                        <MenuRoundedIcon fontSize='large' />
                    </IconButton>
                    <Drawer
                        anchor={'left'}
                        open={state}
                        onClose={toggleDrawer(false)}
                    ><div className={classes.menu_container}>
                            {list()}
                        </div>
                    </Drawer>
                    <IconButton size="medium" className={classes.menuButton} href='tel:+380' >
                        <CallRoundedIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
