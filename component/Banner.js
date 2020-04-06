import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    first: {
        fontSize: '1rem',
        background: theme.palette.secondary.main,
        marginRight: 36,
        position: 'relative',
        color: '#FFFFFF',
        textAlign: 'center',
        '&:after': {
            content: '""',
            position: 'absolute',
            borderLeft: `36px solid ${theme.palette.secondary.main}`,
            borderBottom: '36px solid transparent',
            right: -36,
            top: 0
        }
    },
    second: {
        fontSize: '1rem',
        marginLeft: 8,
        background: '#FFFFFF',
        position: 'relative',
        boxShadow: 'rgba(0, 0, 0, 0.2) 1px 2px 1px -1px, rgba(0, 0, 0, 0.14) 1px 1px 1px 0px, rgba(0, 0, 0, 0.12) 2px 1px 3px 0px',
        '&:after': {
            content: '""',
            position: 'absolute',
            borderRight: `36px solid #FFFFFF`,
            borderTop: '36px solid transparent',
            left: -36,
            top: -1,
            // boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px'
            boxShadow: '1px 1px 1px 0px #a7a7a7',
            zIndex: -1
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 50,
            border: '.3px solid #e0e0e0',
            transform: 'rotate(-44deg)',
            left: -41,
            top: 16
        }
    }
}));

const Banner = () => {

    const classes = useStyles();

    return (
        <Box mb={1.5} mt={1.5} display="flex">
            <Box component={Typography} boxShadow={1} p={.7} width={100} className={classes.first}>{'Just in'}</Box>
            <Box component={Typography} boxShadow={1} p={.7} width="100%" className={classes.second}>{'Date to start Ram Mandir construction to be finalized in first trust meeting today.'}</Box>
        </Box>
    );
};

export default Banner;