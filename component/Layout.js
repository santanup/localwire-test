import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../public/logo/logo.png';
import NavMenu from "./NavMenu";
import moment from "moment";
import CloudIcon from '@material-ui/icons/Cloud';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageChange from "./LanguageChange";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    top: {
        background: `linear-gradient(90deg, rgba(24,79,156,1) 0%, rgba(129,218,249,1) 100%)`,
        color: '#FFFFFF'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.secondary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        border: '1px solid #e0e0e0',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
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
        background: theme.palette.secondary.main,
        color: '#FFFFFF'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 0, 1, 1),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '32ch',
        },
    },
    loginBtn: {
        border: '1px solid #e0e0e0',
        marginLeft: theme.spacing(2),
        backgroundColor: fade(theme.palette.secondary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, 0.25),
        },
    },
    social: {
        background: '#FFFFFF',
        marginLeft: theme.spacing(1)
    }
}));

const Layout = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" elevation={2}>
                <Box className={classes.top}>
                    <Container>
                        <Box display="flex" justifyContent="space-between" mt={.6} mb={.6}>
                            <div>{moment().format('LLLL')} | <LanguageChange/></div>
                            <Box display="flex">{'Chandrasekharpur, Bhubaneswar 33C '}<CloudIcon fontSize="small"/></Box>
                            <div>
                                <IconButton size="small" className={classes.social}>
                                    <YouTubeIcon fontSize="inherit" color="secondary"/>
                                </IconButton>
                                <IconButton size="small" className={classes.social}>
                                    <FacebookIcon fontSize="inherit" color="secondary"/>
                                </IconButton>
                                <IconButton size="small" className={classes.social}>
                                    <TwitterIcon fontSize="inherit" color="secondary"/>
                                </IconButton>
                                <IconButton size="small" className={classes.social}>
                                    <InstagramIcon fontSize="inherit" color="secondary"/>
                                </IconButton>
                                <IconButton size="small" className={classes.social}>
                                    <LinkedInIcon fontSize="inherit" color="secondary"/>
                                </IconButton>
                            </div>
                        </Box>
                    </Container>
                </Box>
                <Container>
                    <Toolbar>
                        {/*<IconButton*/}
                        {/*    edge="start"*/}
                        {/*    className={classes.menuButton}*/}
                        {/*    color="inherit"*/}
                        {/*    aria-label="open drawer"*/}
                        {/*>*/}
                        {/*    <MenuIcon />*/}
                        {/*</IconButton>*/}
                        <div className={classes.logo}>
                            <img src={Logo} alt="LocalWire Logo"/>
                        </div>
                        {/*<Typography className={classes.title} variant="h6" noWrap>*/}
                        {/*    Material-UI*/}
                        {/*</Typography>*/}
                        <Box display="flex">
                            <div className={classes.search}>
                                <InputBase
                                    placeholder="Search articles, topics, opinions, & more"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                            </div>
                            <Button
                                className={classes.loginBtn}
                                startIcon={<ExitToAppIcon />}
                            >Login</Button>
                        </Box>
                    </Toolbar>
                    <NavMenu/>
                </Container>
            </AppBar>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;