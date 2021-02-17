import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => {
  return {
    container: {
      marginTop: '4rem',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#444',
    },

    slide: {
      position: 'relative',
      minHeight: '350px',
      overflow: 'hidden',
      maxWidth: '700px',
    },
    btn: {
      textAlign: 'center',
    },
  };
});
