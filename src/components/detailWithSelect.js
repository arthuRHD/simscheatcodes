import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CommandDetailWithSelect(props) {
  const classes = useStyles();
  const [command, commandUpdate] = useState("")

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={props.id + "-content"}
        id={props.id + "-header"}
      >
        <Typography className={classes.heading}>
          <Select
            defaultValue=""
            id="grouped-select"
            onChange={(e) => commandUpdate(e.target.value)}
          >
            {props.choices.map((choice, i) => {
              return <MenuItem value={choice}>{choice}</MenuItem>;
            })}
          </Select>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong>{props.initCommand + " " + command}</strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
