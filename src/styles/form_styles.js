import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainBox: {

    },
    aboutContent: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        margin: '40px 15%',

    },
    aboutContent_text: {
        marginTop: '30px',
        textIndent: '30px'
    },
    aboutContent_title: {
        textAlign: 'center'
    },
    aboutContent_textBlock: {
        padding: '20px',
    },
    aboutContent_image: {
        height: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form_question: {
        width: '400px',
        marginTop: '30px'

    },
    form_params: {
        width: '400px',
        marginTop: '30px'
    },
    form_button: {
        marginTop: '30px',
        borderRadius: '45px'
    }
}));

export default useStyles