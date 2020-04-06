import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
    root: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));

const Title = ({title}) => {

    const classes = useStyles();

    return (
        <Typography className={classes.root}>{title}</Typography>
    );
};

export default Title;