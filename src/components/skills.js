import { TextField, InputAdornment } from '@material-ui/core';
import KeyboardRoundedIcon from '@material-ui/icons/KeyboardRounded';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();
  const [command, commandUpdate] = useState("")

  return (
    <Card>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Liste des commandes</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={(e) => commandUpdate(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader><strong>Argent</strong></ListSubheader>
          <MenuItem value={"money 1000000"}>Je veux un million de simflouz</MenuItem>
          <MenuItem value={"households.autopay_bills"}>Je ne veux plus payer de loyer</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
        
            <TextField                
                id="input-with-icon-textfield"
                label="Commande à taper"
                value={command}
                InputProps={{
                    startAdornment: (
                        <InputAdornment className={classes.text} position="start">
                            <KeyboardRoundedIcon/>
                        </InputAdornment>
                    ),
                    shrink: true,
                }}
            />
      </FormControl>
    </Card>
  );
}