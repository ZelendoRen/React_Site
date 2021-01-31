import { makeStyles } from '@material-ui/core/styles'
import image from '../img/aboutPage.jpg'
const useStyles = makeStyles((theme) => ({

    picture_block: {
        background: `url('${image}') no-repeat center center`,
        backgroundSize: 'cover',
        height: '100%'
    },
    contentBlock: {
        height: '100vh',
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    contentBlock_header: {
        fontWeight: '900',
        margin: '0 auto',
        maxWidth: ' 840px',
        color: '#FFFFFF',
        fontSize: '64px',
        lineHeight: 1,

    },
    contentBlock_text: {
        color: '#FFFFFF',
        fontSize: '22px',
        lineHeight: '1.5',
        margin: '20px auto 30px',
        maxWidth: '640px'
    },
    contentBlock_textContainer: {
        boxSizing: 'border-box',

        textAlign: 'center',
    }
}));

export default useStyles