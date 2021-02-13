import React from 'react';
import { Avatar, Typography, Container } from '@material-ui/core';
import useStyles from './ReviewStyle';

const Review = ({ data, state }) => {
  const classes = useStyles();

  const style = function (state) {
    if (state === 'active') {
      return { opacity: 1 };
    } else if (state === 'previous') {
      return { opacity: 0, transform: 'translateX(-100%)' };
    } else if (state === 'next') {
      return { opacity: 0, transform: 'translateX(100%)' };
    }
  };

  return (
    <Container maxWidth="md" className={classes.container} style={style(state)}>
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
