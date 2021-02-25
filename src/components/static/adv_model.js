import useStyles from "../../styles/adv_mode_stylesl.js";
import React from 'react';



export default function ModelAdv(data) {
    let content = data.data
    const classes = useStyles();
    return (
        <div className={classes.mainBlock}>
            <div className={classes.block_1}>
                <div className={classes.block_2}>
                    <div className={classes.block_5}>
                        <div className={classes.text}>
                            1. Подарки и не только dasda ad as ad sd ad sd sada  . Чего тут только нету
                        </div>
                    </div>
                    <div className={classes.block_6}>
                        <div className={classes.text}>
                            2. Подарки и не только dasda ad as ad sd ad sd sada  . Чего тут только нету
                        </div>
                    </div>
                </div>
                <div className={classes.block_3}>
                    <div className={classes.text}>
                        3. Подарки и не только dasda ad as ad sd ad sd sada  . Чего тут только нету
                    </div>
                </div>
            </div>
            <div className={classes.block_4}>
                <div className={classes.text}>
                    4. Подарки и не только dasda ad as ad sd ad sd sada  . Чего тут только нету
                </div>
            </div>
        </div>
    )
};

