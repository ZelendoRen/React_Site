import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),

    },
    appbar: {
        backgroundColor: "rgba(0,0,0,0)",
        boxShadow: 'none',
        margin: 0,
        top: 5
    },
    toolbar: {
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    menu_container: {
        backgroundColor: "#161616",
        height: '100%',
        width: '300px'
    },
    itemlist: {
        marginTop: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '18px'
    },
    menu_title: {
        color: 'white',
        fontSize: '24px',
        paddingBottom: '10px',
    },
    menu_support: {
        borderRadius: '45px',
        marginTop: '20px',
        fontSize: '13px',
    },
    menu_socialMedia: {
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    menu_socialMedia_block: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.55)',
            color: 'rgba(0,0,0,0.9)',
        }
    },
    menuItem: {
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.75)',
    }
}))
export default useStyles