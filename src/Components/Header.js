import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(() => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,0,.6),rgba(0,0,0,.4)), url(https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  },

  h2: {
    letterSpacing: '4px',
    textAlign: 'center',
    opacity: 0,
  },

  h4: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <Fade in timeout={{ enter: 2000 }}>
        <Typography
          variant="h2"
          className={classes.h2}
          style={matches ? { fontSize: '2rem' } : { fontSize: '4rem' }}
          gutterBottom
        >
          Explore Nature
        </Typography>
      </Fade>
      <Fade in timeout={{ enter: 2000 }}>
        <Typography
          variant="h4"
          className={classes.h4}
          gutterBottom
          style={matches ? { fontSize: '1.5rem' } : { fontSize: '2rem' }}
        >
          Choose one of our immersive tours
        </Typography>
      </Fade>
      <Fade in timeout={{ enter: 2000 }}>
        <Button component={Link} to="/" disableElevation>
          <Typography variant="subtitle1">Book now</Typography>
        </Button>
      </Fade>
    </section>
  );
};

export default Header;
