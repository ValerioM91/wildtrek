import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    color: '#444',
    display: 'flex',
    margin: '1rem',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    boxShadow: '0 2rem 5rem rgba(0,0,0,.2)',
  },
  media: {
    height: 170,
  },

  inline: {
    display: 'inline',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  h5: {
    flex: 1,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    alignSelf: 'center',
    paddingBottom: '1.3rem',
  },
});

const Tour = ({ name, image, features }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent className={classes.content}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          align="center"
          className={classes.h5}
          color="primary"
        >
          {name}
        </Typography>
        <List>
          {features.map(feature => (
            <React.Fragment key={feature}>
              <ListItem alignItems="center">
                <ListItemText primary={feature} align="center" />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Tour;
