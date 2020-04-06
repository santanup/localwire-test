import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const PostItemSkeleton = () => {

    return (
        <Box component={Paper} p={1} mb={2}>
            <Box display="flex">
                <Skeleton variant="rect" height={130} width={130}/>
                <Box ml={1} width="100%">
                    <Skeleton variant="rect" height={20}/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                    <Skeleton variant="text"/>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <div>
                    <Skeleton variant="text" width={70}/>
                </div>
                <Box display="flex">
                    <Skeleton variant="text" width={250}/>
                </Box>
            </Box>
        </Box>
    );
};

export default PostItemSkeleton;