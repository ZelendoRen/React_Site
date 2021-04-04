import { makeStyles } from '@material-ui/core/styles'
import image from '../img/it_products_main.jpg'
const useStyles = makeStyles((theme) => ({

    picture_block: {
        background: `url('${image}') no-repeat center center`,
        backgroundSize: 'cover',
        height: '100%'
    },
    contentBlock: {
        height: '100vh',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 12%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 90%);',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBlock_header: {
        fontWeight: '900',
        margin: '0 auto',
        maxWidth: ' 840px',
        color: '#FFFFFF',
        fontSize: '64px',
        lineHeight: 1,
        textShadow: '3px 2px 80px rgba(0,0,0,1)',
    },
    contentBlock_text: {
        color: '#FFFFFF',
        fontSize: '26px',
        lineHeight: '1.5',
        margin: '20px auto 30px',
        maxWidth: '640px',
        textShadow: '3px 2px 80px rgba(0,0,0,1)',
    },
    contentBlock_textContainer: {
        boxSizing: 'border-box',

        textAlign: 'center',
    }
}));

export default useStyles