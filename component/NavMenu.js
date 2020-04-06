import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%'
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // width: '100%',
        // backgroundColor: theme.palette.background.paper,
        minWidth: 'auto'
    },
}));

function NavMenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            // onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{ children: <span /> }}
        >
            <Tab label={<Home color="secondary"/>} classes={{root: classes.root}} {...a11yProps(0)} />
            <Tab label="Happenings" classes={{root: classes.root}} {...a11yProps(1)} />
            <Tab label="Special" classes={{root: classes.root}} {...a11yProps(2)} />
            <Tab label="Business" classes={{root: classes.root}} {...a11yProps(3)} />
            <Tab label="Education" classes={{root: classes.root}} {...a11yProps(4)} />
            <Tab label="Health" classes={{root: classes.root}} {...a11yProps(5)} />
            <Tab label="Politics" classes={{root: classes.root}} {...a11yProps(6)} />
            <Tab label="Sports" classes={{root: classes.root}} {...a11yProps(6)} />
            <Tab label="Entertainment" classes={{root: classes.root}} {...a11yProps(6)} />
            <Tab label="News In 30 Secs" classes={{root: classes.root}} {...a11yProps(6)} />
            <Tab label="More" classes={{root: classes.root}} {...a11yProps(6)} />
        </Tabs>
    );
}

export default NavMenu;