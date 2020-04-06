import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FooterLogo from "../public/footer_logo.png";
import AppLogo from "../public/app.png";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import InputBase from "@material-ui/core/InputBase";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#e9f2ff'
    },
    social: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    search: {
        position: 'relative',
        // borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        // backgroundColor: fade(theme.palette.secondary.main, 0.15),
        // '&:hover': {
        //     backgroundColor: fade(theme.palette.secondary.main, 0.25),
        // },
        marginLeft: 0,
        width: '100%',
        border: '1px solid #e0e0e0',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1.5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0,
        background: theme.palette.primary.main,
        color: '#FFFFFF'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 0, 1, 1),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // width: '32ch',
        },
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root} pt={4} pb={4}>
            <Container>
                <Grid container spacing={2}>
                    <Box component={Grid} item md={4} xs={12} textAlign="center">
                        <img src={FooterLogo} alt="LocalWire footer logo"/>
                        <div>
                            <IconButton size="medium" className={classes.social}>
                                <YouTubeIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton size="medium" className={classes.social}>
                                <FacebookIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton size="medium" className={classes.social}>
                                <TwitterIcon fontSize="inherit"/>
                            </IconButton>
                            <IconButton size="medium" className={classes.social}>
                                <InstagramIcon fontSize="inherit"/>
                            </IconButton>
                            {/*<IconButton size="medium" className={classes.social}>*/}
                            {/*    <LinkedInIcon fontSize="inherit"/>*/}
                            {/*</IconButton>*/}
                        </div>
                        <img src={AppLogo} alt="LocalWire footer logo"/>
                    </Box>
                    <Grid item md={8} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item md={3} sm={6} xs={12}>
                                <Typography variant="h6">Corporate Info</Typography>
                                <Typography variant="body1">About us</Typography>
                                <Typography variant="body1">Our Advertisers</Typography>
                                <Typography variant="body1">Explore</Typography>
                                <Typography variant="body1">Careers</Typography>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Typography variant="h6">Support</Typography>
                                <Typography variant="body1">FAQ</Typography>
                                <Typography variant="body1">Contact Us</Typography>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Typography variant="h6">Partnerships</Typography>
                                <Typography variant="body1">Advertise on</Typography>
                                <Typography variant="body1">LocalWire</Typography>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Typography variant="h6">Security</Typography>
                                <Typography variant="body1">Copyright</Typography>
                                <Typography variant="body1">Terms of use</Typography>
                                <Typography variant="body1">Privacy policy</Typography>
                            </Grid>
                        </Grid>
                        <Box className={classes.search} mt={2}>
                            <InputBase
                                placeholder="Subscribe to the newsletter by entering your email here"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <div className={classes.searchIcon}>
                                <SendIcon />
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" mt={2}>
                    <Typography variant="body1">Disclaimer: LocalWire is not responsible for the content of external sites.</Typography>
                    <Typography variant="body1">© 2020 LocalWire. All Rights Reserved.</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;