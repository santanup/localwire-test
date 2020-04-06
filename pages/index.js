import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "../src/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <Box component={Container} pt={4} pb={4}>

        <Grid container spacing={2} alignItems="center">

          <Grid item md={6} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea component={Link} href="/en">
                <CardMedia
                    className={classes.media}
                    image="https://www.universum-ks.org/blog/wp-content/uploads/2017/04/English1-1.jpg"
                    title="English"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {'Start English'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" fullWidth component={Link} href="/od">
                  {'View in English'}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea component={Link} href="/od">
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSopnTei4BUGvvsoUmHySlU3D75eh0dJYYUeRB-OhL4zj3dcTHu&usqp=CAU"
                    title="Odia"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {'Start Odia'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" fullWidth component={Link} href="/od">
                  {'View in Odia'}
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Box>
  );
}