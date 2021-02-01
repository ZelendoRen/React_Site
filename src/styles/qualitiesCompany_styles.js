import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        margin: '60px 0px'
    },
    qualitieBlock: {
        padding: '35px',
    },
    qualitieBlock_title: {
        display: 'flex',
        borderColor: 'rgba(63,81,181,0.7)',
        border: 'solid',
        borderWidth: '0px',
        borderBottomWidth: '3px',
        paddingBottom: '1px',
        marginBottom: '25px'
    },
    qualitieBlock_title_number: {
        color: '#3F51B5',
        marginRight: '15px',
        fontSize: '25px',
    },
    qualitieBlock_title_title: {
        fontSize: '24px'
    }
}))
export default useStyles