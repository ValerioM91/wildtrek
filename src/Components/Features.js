import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    height: '900px',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1562512619-e5ed0e495c78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: '80% 100%',
    display: 'flex',
    alignItems: 'center',
  },
  h3: {
    color: '#fff',
    textTransform: 'uppercase',
    width: '40%',
    marginLeft: '3rem',
  },
});

const Features = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={
        matches
          ? {
              justifyContent: 'center',
              alignItems: 'flex-start',
            }
          : {}
      }
    >
      <Typography
        variant="h3"
        className={classes.h3}
        style={
          matches
            ? { width: '90%', marginTop: '14rem', fontSize: '2rem' }
            : { fontSize: '3rem' }
        }
      >
        Our holidays are crafted by our expert and passionate team
      </Typography>
    </div>
  );
};

export default Features;
