import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  command: {
    color: 'green',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 15,
  },
}));

export default function CommandDetail(props) {
  const classes = useStyles();

    return (<Accordion className={classes.root}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.id + "-content"}
            id={props.id + "-header"}
        >
            <Typography className={classes.heading}>Listes des carrières</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.command}>
              
            </Typography>
        </AccordionDetails>
    </Accordion>);
}
