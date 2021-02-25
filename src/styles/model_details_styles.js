import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainblock: {
        display: 'flex',
        flexDirection: 'row',
        background: 'rgba(201,160,220,0.8)',
        padding: '0 10%'
    },
    textblock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: '150px',
        padding: '0 5%'
    },
    title: {
        marginBottom: '20px'
    },
    button: {
        marginTop: '20px', borderRadius: '45px'
    }
}))
export default useStyles