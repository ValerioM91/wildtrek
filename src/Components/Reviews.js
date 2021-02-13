import React from 'react';
import Slider from './Slider/Slider';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section: {
    background: 'linear-gradient(to bottom, #eee 50%, transparent)',
    padding: '8rem 0 2rem 0',
    marginTop: '-6rem',
    marginBottom: '5rem',
    transform: 'skewY(-5deg)',
    '& > *': {
      transform: 'skewY(5deg)',
    },
    zIndex: '5',
  },
  h3: {
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #2998ff, #53AEFF)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
}));

const Reviews = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Typography variant="h3" align="center" className={classes.h3}>
        WHAT PEOPLE SAY
      </Typography>
      <Slider />
    </div>
  );
};

export default Reviews;
