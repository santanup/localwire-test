import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Visibility from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
    head: {
        // fontWeight: 600
    },
    img: {
        height: 130,
        width: 130,
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
    },
    shares: {
        display: 'flex',
        marginLeft: theme.spacing(1),
        '& svg': {
            marginRight: theme.spacing(1)
        }
    },
    readMore: {
        fontSize: 15,
        color: theme.palette.primary.main,
        marginLeft: theme.spacing(1)
    }
}));

const PostItem = ({post}) => {

    const classes = useStyles();

    if (post.id === 'special') return '';

    return (
        <Box component={Paper} p={1} mb={2}>
            <Box display="flex">
                <Avatar src={post.media} variant="rounded" className={classes.img}/>
                <Box ml={1}>
                    <Typography variant="h6" className={classes.head}>{post.title}</Typography>
                    <Typography variant="body1">
                        {post.excerpt}
                        <a href="#" className={classes.readMore}>read more</a>
                    </Typography>
                    {
                        post.date && <Typography variant="body1">{post.date}</Typography>
                    }

                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <div>
                    {
                        post.post_data && <Typography variant="body2" className={classes.views}><Visibility fontSize="small"/>{post.post_data.views} Views</Typography>
                    }
                </div>
                <Box display="flex">
                    {
                        post.post_data && post.post_data.likes && <Typography variant="body2" className={classes.views}><ThumbUpAltIcon fontSize="small"/>{post.post_data.likes} likes</Typography>
                    }
                    {
                        post.post_data && post.post_data.shares && <Typography variant="body2" className={classes.shares}><CommentIcon fontSize="small"/>{post.post_data.shares} comments</Typography>
                    }
                    {
                        post.post_data && post.post_data.shares && <Typography variant="body2" className={classes.shares}><ShareIcon fontSize="small"/>{post.post_data.shares} shares</Typography>
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default PostItem;