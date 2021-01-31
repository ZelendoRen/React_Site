import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainBlcok: {
        width: '100%',
        padding: '40px 10%',
    },
    feedback_image: {
        minWidth: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '10px'

    },
    feedback_block: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '25px'
    },
    feedback_textblcok: {
        width: '80%',
        padding: '10px',
    },
    feedback_textblcok_headers: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '20px',
        alignItems: 'flex-end',
        marginBottom: '10px'
    },
    feedback_textblcok_text: {
        fontSize: '14px',
    },
    feedback_textblcok_name: {
        fontSize: '20px',
        marginRight: '10px'

    },
    feedback_textblcok_status: {
        fontSize: '14px',
        color: 'rgba(0,0,0,0.7)'
    },

}));

export default useStyles