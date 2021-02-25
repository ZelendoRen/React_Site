import { Container, Typography, Button } from '@material-ui/core';
import '../../styles/adv-transl_styles.css'
import useStyles from "../../styles/adv-transl_styles.js";
import React from 'react';



export default function AdvantagesT() {

    const classes = useStyles();
    console.log(classes)
    return (
        <div>
            <Typography variant={'h4'} className={classes.title}>
                Преимущества работы у нас:
            </Typography>
            <div className={classes.mainBlock}>

                <div className={classes.textContent}>
                    <div className="adv_text">
                        <p className='text_decoration_number'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
                        <p className='text_decoration_number'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
                        <p className='text_decoration_number'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
                    </div>
                </div>

            </div>
            <div className={classes.buttonBlock}>
                <Button className={classes.button} variant="contained" color="primary">
                    Начать работу
            </Button>
            </div>

        </div>
    )
};