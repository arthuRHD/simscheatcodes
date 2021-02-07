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
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CommandDetail(props) {
  const classes = useStyles();

    return (<Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={props.id + "-content"}
            id={props.id + "-header"}
        >
            <Typography className={classes.heading}>{props.summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography><strong>{props.command}</strong></Typography>
        </AccordionDetails>
    </Accordion>);
}
