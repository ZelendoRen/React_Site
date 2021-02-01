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
        marginRight: '15px'
    }
}));

export default useStyles