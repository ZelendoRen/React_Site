import { makeStyles } from '@material-ui/core/styles';
import img from '../img/background_adv.png';
const useStyles = makeStyles((theme) => ({
    mainBlock_element: {
        backgroundColor: '#DF9FAC',
        color: 'black',
        boxShadow: 'none',
        '&:before': {
            backgroundColor: 'rgba(176,16,48,0.5)'
        }
    },
    mainBlock: {
        padding: '60px 20%',
        backgroundColor: '#DF9FAC',

    },
    heading: {
        fontSize: '28px'
    },
    icon: {
        color: 'rgba(176,16,48,0.5)'
    },
    mainTitle: {
        color: 'black',
        textAlign: 'center',
        marginBottom: '30px'
    }
}))
export default useStyles