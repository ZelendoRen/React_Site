import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    footerBox: {
        backgroundColor: "#161616",
        color: 'white',
        padding: '20px 10%',
        maxWidth: '100%',
        justifyContent: 'center',

    },
    footer_phone: {
        marginTop: '20px',
        textAlign: 'center',
        color: 'white',
        fontSize: '20px'
    },
    footer_title: {
        textAlign: 'center'
    },
    footer_firstBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    menu_socialMedia_block: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: '20px',
        margin: '0 8px',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.55)',
            color: 'rgba(0,0,0,0.9)',

        }
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',

    },
    footer_bottom: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footer_bottom_icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer_bottom_title: {
        fontSize: '12px',
        color: 'rgba(255,255,255,0.65)'
    },
    footer_bottom_text: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    menu_items: {
        color: 'rgba(255,255,255,0.65)'
    },
    footer_recall: {
        display: 'flex',
        flexDirection: 'column',
    },
    footer_form: {
        borderRadius: '20px',
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px'
    },
    footer_form_button: {
        marginTop: '15px',
        borderRadius: '45px'
    },
    footer_form_field: {
        marginTop: '15px',
        borderColor: 'white',
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline': {
            '&:before': {
                borderBottomColor: 'white',
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'white',
            }
        },


    },
    menuItem: {
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.75)',
    }
}));

export default useStyles