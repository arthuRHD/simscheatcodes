import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../Mediamodifier-Design.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    margin: -100,
    width: 500,
    height: 500,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <img className={classes.img} alt="complex" src={logo} />
  );
}