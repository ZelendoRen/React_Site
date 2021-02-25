import { makeStyles } from '@material-ui/core/styles';
import beach from '../img/mddel_adv/1.jpg';
import present from '../img/mddel_adv/2.jpg';
import man from '../img/mddel_adv/3.jpg';
import photo from '../img/mddel_adv/4.jpg';
const $quoteSym = '';
const transition_duration = 800

const useStyles = makeStyles((theme) => ({
    mainBlock: {
        margin: '40px 0%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    block_5: {
        margin: '15px',
        height: '380px',
        width: '380px',
        backgroundImage: `url('${beach}')`,
        backgroundSize: 'cover',
        transition: ['background'],
        zIndex: '0',

        '&:before': {
            transition: ['all'],
            transitionDuration: 800,
            background: `rgba(0,0,0,0)`,
            height: 'inherit',
            width: 'inherit',
            position: 'absolute',
            content: `'${$quoteSym}'`,
            zIndex: '1',
        },
        '&:hover&:before': {
            transition: ['all'],
            transitionDuration: 800,
            display: 'inline-block',
            background: `rgba(0,0,0,0.5)`,
            zIndex: '1',

        },
        '&:hover $text': {
            transition: ['all'],
            transitionDuration: 800,
            zIndex: '99',
            paddingTop: '100px',
            color: 'white',
            opacity: 1
        }
    },
    block_6: {
        margin: '15px',
        height: '380px',
        width: '380px',
        backgroundImage: `url('${present}')`,
        backgroundSize: 'cover',

        '&:before': {
            transition: ['all'],
            transitionDuration: 800,
            background: `rgba(0,0,0,0)`,
            height: 'inherit',
            width: 'inherit',
            position: 'absolute',
            content: `'${$quoteSym}'`,
            zIndex: '1',
        },
        '&:hover&:before': {
            transition: ['all'],
            transitionDuration: 800,
            display: 'inline-block',
            background: `rgba(0,0,0,0.5)`,
            zIndex: '1',

        },
        '&:hover $text': {
            transition: ['all'],
            transitionDuration: 800,
            zIndex: '99',
            paddingTop: '100px',
            color: 'white',
            opacity: 1
        }
    },
    block_3: {

        width: '380px',
        height: '775px',
        backgroundImage: `url('${man}') `,
        backgroundSize: 'cover',
        margin: '15px',
        zIndex: '0',
        '&:before': {
            transition: ['all'],
            transitionDuration: 800,
            background: `rgba(0,0,0,0)`,
            height: 'inherit',
            width: 'inherit',
            position: 'absolute',
            content: `'${$quoteSym}'`,
            zIndex: '99',
        },
        '&:hover&:before': {
            transition: ['all'],
            transitionDuration: 800,
            display: 'inline-block',
            background: `rgba(0,0,0,0.5)`,
            zIndex: '1',

        },
        '&:hover $text': {

            transition: ['all'],
            transitionDuration: 800,
            zIndex: '99',
            paddingTop: '100px',
            color: 'white',
            opacity: 1
        }
    },
    block_1: {
        display: 'flex',
        flexDirection: 'row'
    },
    block_4: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '790px',
        height: '350px',
        backgroundImage: `url('${photo}')`,
        backgroundSize: 'cover',
        margin: '15px',
        zIndex: '0',
        '&:before': {
            transition: ['all'],
            transitionDuration: 800,
            background: `rgba(0,0,0,0)`,
            height: 'inherit',
            width: 'inherit',
            position: 'absolute',
            content: `'${$quoteSym}'`,
            zIndex: '99',
        },
        '&:hover&:before': {
            transition: ['all'],
            transitionDuration: 800,
            display: 'inline-block',
            background: `rgba(0,0,0,0.5)`,
            zIndex: '1',

        },
        '&:hover $text': {
            transition: ['all'],
            transitionDuration: 800,
            zIndex: '99',
            paddingTop: '100px',
            color: 'white',
            opacity: 1,
        }
    },

    text: {
        transition: ['all'],
        transitionDuration: 800,
        fontSize: '25px',
        color: 'white',
        zIndex: '99',
        opacity: 0,
        position: 'relative',
        padding: '0 40px',
        width: '300px'
    },


}))
export default useStyles