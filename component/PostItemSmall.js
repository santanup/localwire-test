import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    head: {
        fontWeight: 600
    },
    img: {
        height: 100,
        width: 100,
        '& img': {
            height: '100%',
            width: 'auto'
        }
    },
    views: {
        display: 'flex',
        '& svg': {
            marginRight: theme.spacing(1)
        }
    }
}));
const PostItemSmall = ({post}) => {

    const classes = useStyles();

    if (post.id === 'special') return '';

    return (
        <Box display="flex" mb={1.5}>
            <Avatar src={post.media} variant="rounded" className={classes.img}/>
            <Box ml={1}>
                <Typography variant="h6" className={classes.head}>{post.title}</Typography>
                {/*<Typography variant="body1">{post.excerpt} read more</Typography>*/}
                <Box>
                    <Typography variant="body2">By: {post.author}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default PostItemSmall;