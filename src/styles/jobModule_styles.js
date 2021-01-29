import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        backgroundColor: 'rgba(255,255,255,0)'
    },
    mainBox: {
        margin: ' 0 auto',
        textAlign: 'center',
        padding: '2% 5%',
        width: '60%',
    },
    two_card: {
        display: 'flex',
        flexDirection: 'column',

    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: 'auto',
        marginBottom: '30px'
    },
    card_textBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'left'
    },
    card_textBlock_text: {
        marginTop: '20px'
    },
    card_textBlock_button: {
        marginTop: '40px',
        borderRadius: '45px',

    },
    card_image: {
        maxHeight: '500px'
    }
}))
export default useStyles