import React from 'react';
import { IconButton } from '@material-ui/core';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


export default function menu(classes) {
    return (
        <div>
            <IconButton aria-label="menu" className={classes.menuButton}>
                <MenuRoundedIcon />
            </IconButton>

            <IconButton aria-label="call" className={classes.menuButton}>
                <CallRoundedIcon />
            </IconButton>
        </div>
    );
}
