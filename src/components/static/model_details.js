import useStyles from '../../styles/model_details_styles';
import React from 'react';
import { Button, Typography } from "@material-ui/core";
import img from '../../img/model_details.png'


export default function ModelAdv(data) {
    let content = data.data
    const classes = useStyles();
    return (
        <div className={classes.mainblock}>
            <div>
                <img src={`${img}`}></img>
            </div>
            <div className={classes.textblock}>
                <Typography variant="h4" className={classes.title}>
                    Модели это круто
                </Typography>
                <Typography>
                    Не ыолнуйтесь, я придумал этот текст только для того, что бы заполнить место в ответе на вопрос. Мне это важно для теста, а еще важенее написать ответ как можно длиннее, что бы полнимать как это будет выглядеть. Я бы оставил тут рецепт пельмений, но мне уже достаточно символов.                 Не ыолнуйтесь, я придумал этот текст только для того, что бы заполнить место в ответе на вопрос. Мне это важно для теста, а еще важенее написать ответ как можно длиннее, что бы полнимать как это будет выглядеть. Я бы оставил тут рецепт пельмений, но мне уже достаточно символов.
                    Не ыолнуйтесь, я придумал этот текст только для того, что бы заполнить место в ответе на вопрос. Мне это важно для теста, а еще важенее написать ответ как можно длиннее, что бы полнимать как это будет выглядеть. Я бы оставил тут рецепт пельмений, но мне уже достаточно символов.
                </Typography>
                <Button className={classes.button} variant="contained" color="primary">Стать нашим клиентом</Button>
            </div>

        </div>
    )
};

