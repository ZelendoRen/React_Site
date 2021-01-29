import { Button, Container } from '@material-ui/core';
import image_transl from '../../img/transl_image.png'
import model_image from '../../img/model_image.png'
import skaut_image from '../../img/skaut_image.png'
import useStyles from "../../styles/jobModule_styles";
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const cards = [
    { id: 0, title: 'Переводчики', text: 'Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока', img: image_transl },
    { id: 1, title: 'Модели', text: 'Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока', img: model_image },
    { id: 2, title: 'Скауты', text: 'Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока Текст для блока внутри блока', img: skaut_image },
]
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.mainBox}>
            <AppBar className={classes.appBar} position="block" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Переводчики" {...a11yProps(0)} />
                    <Tab label="Модели" {...a11yProps(1)} />
                    <Tab label="Скауты" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {cards.map((card) => (
                    <TabPanel value={value} index={card.id} dir={theme.direction}>
                        <div className={classes.card}>
                            <div className={classes.card_textBlock}>
                                <Typography className={classes.card_textBlock_title} variant='h4'>{card.title}</Typography>
                                <Typography className={classes.card_textBlock_text}>{card.text}</Typography>
                                <Button variant="contained" color="primary" className={classes.card_textBlock_button}>Подробнее</Button>
                            </div>
                            <img className={classes.card_image} src={card.img}></img>

                        </div>
                    </TabPanel>
                ))}
            </SwipeableViews>
        </div>
    );
}