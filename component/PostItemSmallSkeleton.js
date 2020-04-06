import React from "react";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const PostItemSmallSkeleton = () => {

    return (
        <Box display="flex" mb={2}>
            <Skeleton variant="rect" height={100} width={100}/>
            <Box ml={1} width="100%">
                <Skeleton variant="rect" height={20}/>
                <Skeleton variant="text"/>
            </Box>
        </Box>
    );
};

export default PostItemSmallSkeleton;