import React, { useState } from 'react';
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

  const [slide, setslide] = useState(data);
  const [index, setIndex] = useState(0);

  const nextReview = index => {
    if (index === slide.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousReview = index => {
    if (index === 0) {
      setIndex(slide.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <Grid container className={classes.container} justify="center">
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
          onClick={() => previousReview(index)}
        >
          <ArrowBackIosOutlinedIcon />
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} style={{ margin: 0 }} className={classes.slide}>
        {slide.map((review, i) => {
          let state = '';
          if (i === index) {
            state = 'active';
          } else if (
            i === index - 1 ||
            (index === 0 && i === slide.length - 1)
          ) {
            state = 'previous';
          } else {
            state = 'next';
          }

          return <Review data={review} key={review.id} state={state} />;
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
          onClick={() => previousReview(index)}
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
          onClick={() => nextReview(index)}
        >
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Slider;
