import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import data from '../../data/reviews';
import Review from './Review';
import useStyles from './SliderStyle';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Slider = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    if (index < 0) setIndex(reviews.length - 1);
    if (index > reviews.length - 1) setIndex(0);
  }, [index, reviews]);

  useEffect(() => {
    if (timer) {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 3000);
      return () => clearInterval(slider);
    }
  }, [index, timer]);

  return (
    <Grid
      container
      className={classes.container}
      justify="center"
      onMouseOver={() => setTimer(false)}
      onMouseLeave={() => setTimer(true)}
    >
      <Grid
        item
        xs={1}
        className={classes.btn}
        style={matches ? { display: 'none' } : { display: 'block' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setIndex(index - 1)}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} style={{ margin: 0 }} className={classes.slide}>
        {reviews.map((review, reviewIndex) => {
          let position = 'next';
          if (reviewIndex === index) position = 'active';
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          )
            position = 'previous';

          return <Review data={review} key={review.id} position={position} />;
        })}
      </Grid>
      <Grid
        item
        xs={6}
        style={!matches ? { display: 'none' } : { display: 'block' }}
        className={classes.btn}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setIndex(index - 1)}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={!matches ? 1 : 6} className={classes.btn}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.btn}
          onClick={() => setIndex(index + 1)}
        >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Slider;
