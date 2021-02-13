import React from 'react';
import Tour from './Tour';
import ToursData from '../data/tours';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: {
    backgroundColor: '#fff',
    padding: '8rem 0 12rem 0',
    marginTop: '-6rem',
    marginBottom: '-6rem',
    transform: 'skewY(-5deg)',
    '& > *': {
      transform: 'skewY(5deg)',
    },
  },
  h3: {
    textTransform: 'uppercase',
    paddingBottom: '2rem',
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #2998ff, #53AEFF)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
});

const Tours = () => {
  const classes = useStyles();

  const tours = ToursData;
  return (
    <div className={classes.section}>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        gutterBottom
        className={classes.h3}
      >
        Our best tours
      </Typography>
      <Grid container justify="center" spacing={3}>
        {tours.map(tour => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            xl={2}
            key={tour.id}
            style={{ display: 'flex' }}
          >
            <Tour
              name={tour.name}
              image={tour.image}
              features={tour.features}
              key={tour.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tours;
