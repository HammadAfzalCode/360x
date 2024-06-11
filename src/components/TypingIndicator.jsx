import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  dot: {
    height: '8px',
    width: '8px',
    margin: '0 2px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    animation: '$bounce 1.4s infinite ease-in-out both',
  },
  '@keyframes bounce': {
    '0%, 80%, 100%': { transform: 'scale(0)' },
    '40%': { transform: 'scale(1.0)' },
  },
});

const TypingIndicator = () => {
  const classes = useStyles();
  return (
    <div>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
    </div>
  );
};

export default TypingIndicator;
