import { Typography } from "@material-ui/core";
import useStyles from "../../styles/product_about_styles";

const ProductBlock = (props) => {
    const classes = useStyles();
    return (
        <div className={props.left ? classes.main_left : classes.main_right}>
            <div className={classes.text_block}>
                <Typography className={classes.text_block_title}>
                    {props.title}
                </Typography>
                <Typography className={classes.text_block_text}>
                    {props.text}
                </Typography>
            </div>
            <img className={classes.img} src={`${props.img}`} />
        </div>
    )
}

export default ProductBlock