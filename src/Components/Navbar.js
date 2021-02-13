import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  toolbar: {
    display: 'flex',
    // flexWrap: 'wrap',
    alignItems: 'stretch',
    paddingRight: 0,
  },
  title: {
    textTransform: 'uppercase',
    marginTop: '10px',
    padding: '.5rem',
    // alignSelf: 'center',
    color: '#eee',
    textDecoration: 'none',
  },
  links: {
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  link: {
    textDecoration: 'none',
    padding: '1rem',
    textTransform: 'uppercase',
    alignSelf: 'center',
    color: '#FFF',
  },
  btn: {
    backgroundImage: 'linear-gradient(45deg, #FE6B8B 0%, #FF8E53 90%)',
    backgroundClip: 'text',
    // WebkitBackgroundClip: 'text',
    // background: 'rgba(0,0,0,.3)',
    boxShadow: 'none',
    // border: '1px solid #FF8E53',
    margin: '10px',
  },
}));

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        color="transparent"
        style={{ boxShadow: 'none' }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component={Link}
            to="/"
            variant="h4"
            sm="alignLeft"
            className={classes.title}
            style={matches ? { fontSize: '1.4rem' } : {}}
          >
            WILDTREK
          </Typography>
          <div className={classes.links}>
            <Link to="/" color="inherit" className={classes.link}>
              <Typography variant="subtitle1" align="center">
                Destinations
              </Typography>
            </Link>

            <Link to="/" color="inherit" className={classes.link}>
              <Typography variant="subtitle1" align="center">
                Tour Calendar
              </Typography>
            </Link>

            <Button
              component={Link}
              to="/"
              className={classes.btn}
              style={matches ? { display: 'none' } : {}}
            >
              <Typography variant="subtitle1" align="center">
                Book now
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
