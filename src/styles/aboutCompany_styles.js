import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: 'rgba(22,22,22,0.95)',
        color: 'white',

    },
    aboutContent: {
        display: 'flex',
        flexDirection: ' row',
        alignItems: 'center',
        margin: '40px 15%',

    },
    aboutContent_text: {
        marginTop: '30px'
    },
    aboutContent_textBlock: {
        padding: '20px',
        textAlign: 'center',
    },
    aboutContent_button: {
        marginTop: '20px',
        borderRadius: '45px'
    }
}));

export default useStyles