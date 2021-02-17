import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  root: {
    marginTop: '-60px',
    backgroundColor: '#444',
    color: '#eee',
    display: 'block',
  },
  container: {
    width: '100%',
    margin: 'auto',
    padding: '2rem',
  },
  logos: {
    alignSelf: 'baseline',
  },
  socials: {
    display: 'flex',
  },
  h4: {
    color: '#eee',
    textDecoration: 'none',
  },
  h6: {
    textTransform: 'uppercase',
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
    paddingRight: '2rem',
  },
  facebook: {
    color: '#eee',
    textDecoration: 'none',
    paddingRight: '2rem',
    transition: 'all .2s',
    '&:hover': { color: '#4267B2' },
  },
  twitter: {
    color: '#eee',
    textDecoration: 'none',
    paddingRight: '2rem',
    transition: 'all .2s',
    '&:hover': { color: '#1DA1F2' },
  },
  instagram: {
    color: '#eee',
    textDecoration: 'none',
    paddingRight: '2rem',
    transition: 'all .2s',
    '&:hover': { color: '#C13584;' },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.container}
      >
        <Grid item xs={12} sm={4} md={3} xl={2}>
          <div className={classes.logos}>
            <Typography
              component={Link}
              to="/"
              variant="h4"
              className={classes.h4}
              gutterBottom
            >
              WILDTREK
            </Typography>
            <div className={classes.socials}>
              <a href="#" className={classes.facebook}>
                <FacebookIcon fontSize="large" />
              </a>
              <a href="#" className={classes.twitter}>
                <TwitterIcon fontSize="large" />
              </a>

              <a href="#" className={classes.instagram}>
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={2} xl={2}>
          <Typography variant="h6" className={classes.h6} gutterBottom>
            Links
          </Typography>
          <Typography
            component={Link}
            className={classes.link}
            to="/"
            variant="body2"
          >
            Contact us
          </Typography>
          <br />
          <Typography
            component={Link}
            className={classes.link}
            to="/"
            variant="body2"
          >
            Terms & conditions
          </Typography>
          <br />
          <Typography
            component={Link}
            className={classes.link}
            to="/"
            variant="body2"
          >
            FAQs
          </Typography>
          <br />
          <Typography
            component={Link}
            className={classes.link}
            to="/"
            variant="body2"
          >
            Newsletters
          </Typography>
          <br />
          <Typography
            component={Link}
            className={classes.link}
            to="/"
            variant="body2"
          >
            Mon-Fri 8:30 17:30
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={2} xl={2}>
          <Typography variant="h6" className={classes.h6} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">Tel: 12345 67890</Typography>
          <Typography variant="body2">Email:</Typography>
          <Typography variant="body2">wildtrek@email.abc</Typography>
          <Typography variant="body2">Opening hours:</Typography>
          <Typography variant="body2">Mon-Fri 8:30 17:30</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={2} xl={2}>
          <Typography variant="h6" className={classes.h6} gutterBottom>
            Visit us
          </Typography>
          <Typography variant="body2">221b Baker Street</Typography>
          <Typography variant="body2">Marylebone</Typography>
          <Typography variant="body2">London</Typography>
          <Typography variant="body2">NW1 6XE</Typography>
          <Typography variant="body2">United Kingdom</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
