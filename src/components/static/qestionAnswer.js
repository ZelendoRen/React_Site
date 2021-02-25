import { Accordion, Typography, Button, AccordionSummary, AccordionDetails, } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../styles/adv-transl_styles.css'
import useStyles from "../../styles/questionAnswer_styles";
import React from 'react';
import { data } from '../../data/QAdata'



export default function QuestionAnswer() {

    const classes = useStyles();
    return (
        <div className={classes.mainBlock}>
            <Typography className={classes.mainTitle} variant={'h4'}>
                Часто задаваемые вопросы
            </Typography>
            {data.map((data) => (
                <Accordion className={classes.mainBlock_element}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.icon} />}
                    >
                        <Typography className={classes.heading}>{data.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{data.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}


        </div>
    )
};