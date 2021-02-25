import { makeStyles } from '@material-ui/core/styles';
import img from '../img/background_adv.png';
const useStyles = makeStyles((theme) => ({

    mainBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url('${img}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '0 5%'

    },
    textContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '60%',

    },
    title: {
        textAlign: 'center',
        margin: '30px 0px',
        fontFamily: "'Lato', sans-serif",


    },
    buttonBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        borderRadius: '45px',
        fontSize: '18px',
        margin: '30px 0px'

    }
}))
export default useStyles