import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    mainBlock: {
        paddingTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        background: 'linear-gradient(to right, rgba(176,16,48,0.4) 60%, white 40%)'
    },
    mainBlock_content: {
        display: 'flex',
        maxHeight: '80%',

        flexDirection: 'row',
        justifyContent: 'center',

    },
    text: {
        marginTop: '40px'

    },
    mainBlock_contet_textContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',

    },
    image: {
        maxHeight: '377px'
    },
    button: {
        borderRadius: '45px'
    },

}))
export default useStyles