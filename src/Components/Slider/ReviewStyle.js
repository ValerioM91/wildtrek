import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    minHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'all .6s ease',
  },

  review: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },

  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  user: {
    alignSelf: 'center',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
