import React, {useEffect, useState} from "react";
import {getAllPostByLanguage} from "../../Endpoints";
import InfiniteScroll from '../../component/InfiniteScroll';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PostItem from "../../component/PostItem";
import Title from "../../component/Title";
import {Box} from "@material-ui/core";
import PostItemSmall from "../../component/PostItemSmall";
import Banner from "../../component/Banner";
import PostItemSkeleton from "../../component/PostItemSkeleton";
import PostItemSmallSkeleton from "../../component/PostItemSmallSkeleton";

const Lang = ({lang, posts: postList}) => {
    const [posts, setPosts] = useState(postList);
    const [hasMore, setHasMore] = useState(true);
    // console.log({lang, posts, hasMore});

    useEffect(() => {
        setPosts(postList);
        setHasMore(true);
    }, [lang]);

    const handleLoadMore = async () => {
        // return false;
        const response = await getAllPostByLanguage(lang, Math.floor(posts.length / 15)) || [];
        setHasMore(Boolean(response.length));
        setPosts([...posts, ...response]);
    };

    const right = posts.length ?  posts.map((each, index) => index <= 3 &&
        <PostItemSmall post={each}/>
    ) : [0,1,2,3].map(each => <PostItemSmallSkeleton key={each}/>);

    return (
        <Container>
            <Banner/>
            <Grid container spacing={2}>
                <Grid item md={8} lg={8} sm={8} xs={12}>
                    <Title title="Today's latest stories"/>
                    <InfiniteScroll
                        hasMore={hasMore}
                        loader={
                            [0,1,2,3].map(each => <PostItemSkeleton key={each}/>)
                        }
                        loadMore={handleLoadMore}
                        pageStart={0}
                    >
                        {
                            // result.map((each, index) => <PyqListItem key={index} pyq={each} index={index}/>)
                            posts.map((each, index) => <PostItem post={each} key={index}/>)
                        }
                    </InfiniteScroll>
                </Grid>
                <Grid item md={4} lg={4} sm={4} xs={12}>
                    <Title title="Live from the state"/>
                    <Box component={Paper} p={1}>
                        {right}
                    </Box>
                    <Title title="Live from the state"/>
                    <Box component={Paper} p={1}>
                        {right}
                    </Box>
                    <Title title="LocalWire Specials"/>
                    <Box component={Paper} p={1}>
                        {right}
                    </Box>
                    <Title title="Interviews"/>
                    <Box component={Paper} p={1}>
                        {right}
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

Lang.getInitialProps = async ctx => {
    // console.log(ctx.pathname, typeof window);
    const lang = ctx.pathname;
    const posts = typeof window === "undefined" ? await getAllPostByLanguage(lang) : [];
    return {lang, posts};
};

export default Lang;