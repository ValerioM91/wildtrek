import React from 'react';
import { Avatar, Typography, Container } from '@material-ui/core';
import useStyles from './ReviewStyle';

const Review = ({ data, position }) => {
  const classes = useStyles();

  const style = function (position) {
    if (position === 'active') {
      return { opacity: 1 };
    } else if (position === 'previous') {
      return { opacity: 0, transform: 'translateX(-100%)' };
    } else if (position === 'next') {
      return { opacity: 0, transform: 'translateX(100%)' };
    }
  };

  return (
    <Container
      maxWidth="md"
      className={classes.container}
      style={style(position)}
    >
      <div className={classes.review}>
        <Typography variant="h5" color="secondary" className={classes.title}>
          {data.title}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {data.review}
        </Typography>
        <div className={classes.user}>
          <Avatar alt={data.name} src={data.image} />
          <Typography vairant="h6">{data.name}</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Review;
