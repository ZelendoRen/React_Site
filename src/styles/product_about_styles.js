import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    main_right: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        background: 'rgba(22,22,22,0.95)',
        color: 'white',
        padding: '100px 15%'
    },
    main_left: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        padding: '100px 15%'
    },
    text_block: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 100px',
    },
    text_block_title: {
        textAlign: 'center',
        fontSize: '36px',
        marginBottom: '35px'
    },
    text_block_text: {

        textIndent: '30px',
        fontSize: '20px',
    }
}));

export default useStyles