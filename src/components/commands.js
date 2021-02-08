import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AppBar from '@material-ui/core/AppBar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/Work';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GradeIcon from '@material-ui/icons/Grade';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CommandDetail from './detail';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const [operations, setOperation] = React.useState('careers.promote');
  const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 20,
      flexGrow: 1,
      width: "80%",
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeRadio = (event) => {
    setOperation(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollaconst handleChange = (event) => {
    setValue(event.target.value);
  };ble"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Argent" icon={<AttachMoneyRoundedIcon />} {...a11yProps(0)} />
          <Tab label="Carrières" icon={<WorkIcon />} {...a11yProps(1)} />
          <Tab label="Sims" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Compétences" icon={<GradeIcon />} {...a11yProps(3)} />
          <Tab label="Adultes" icon={<AccessibilityNewIcon />} {...a11yProps(4)} />
          <Tab label="Adolescents" icon={<InsertEmoticonIcon />} {...a11yProps(5)} />
          <Tab label="Bambins" icon={<ChildFriendlyIcon/>} {...a11yProps(6)} />
        </Tabs>
        <Chip label="Soutenez mes étranges idées" component="a" href="https://www.paypal.com/donate/?hosted_button_id=S3HCLRXP7NLEG" clickable color="primary" variant="outlined" />
      </AppBar>
      <TabPanel variant="" value={value} index={0}>
        <CommandDetail id="panel1" summary="Je veux 1 million de simflouz" command="money 1000000"/>
        <CommandDetail id="panel3" summary="Je veux retirer 1 000 simflouz de mon portfeuille" command="sims.modify_funds -1000"/>
        <CommandDetail id="panel1" summary="Je veux 50 000 simflouz à votre porte monnaie" command="Motherlode"/>
        <CommandDetail id="panel1" summary="Je veux 1 000 simflouz dans mon foyer" command="rosebud"/>
        <CommandDetail id="panel2" summary="Je ne veux plus payer de loyer" command="households.autopay_bills"/>
        <CommandDetail id="panel1" summary={<span>Je veux activer/désactiver l'achat de maison gratuite depuis l'écran <Chip size="small" label="Modifier la ville"/></span>} command="freeRealEstate [on/off]"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Opérations</FormLabel>
          <RadioGroup row aria-label="gender" name="gender1" value={operations} onChange={handleChangeRadio}>
              <FormControlLabel value="careers.add_career" control={<Radio />} label="Ajouter" />
              <FormControlLabel value="careers.remove_career" control={<Radio />} label="Démissionner" />
              <FormControlLabel value="careers.demote" control={<Radio />} label="Rétrograder" />
              <FormControlLabel value="careers.promote" control={<Radio />} label="Promouvoir" />
              <FormControlLabel value="careers.retire" control={<Radio />} label="Partir à la retraite" />
          </RadioGroup>
      </FormControl>
        <CommandDetail id="panel1" summary={<span>Acteur  <Chip size="small" label="Heure de Gloire" /></span>} command={operations + " actor"}/>
        <CommandDetail id="panel1" summary="Affaires" command={operations + " business"}/>
        <CommandDetail id="panel1" summary="Agent secret" command={operations + " secretAgent"}/>
        <CommandDetail id="panel1" summary="Artiste" command={operations + " entertainer"}/>
        <CommandDetail id="panel1" summary="Artiste indépendant" command={operations + " adult_freelancer_artist"}/>
        <CommandDetail id="panel1" summary="Astronaute" command={operations + " astronaut"}/>
        <CommandDetail id="panel1" summary="Athlete" command={operations + " athletic"}/>
        <CommandDetail id="panel1" summary="Auteur" command={operations + " adult_writer"}/>
        <CommandDetail id="panel1" summary="Auteur indépendant" command={operations + " adult_freelancer_agency_writer"}/>
        <CommandDetail id="panel1" summary="Criminelle" command={operations + " criminal"}/>
        <CommandDetail id="panel1" summary={<span>Critique  <Chip size="small" label="Vie citadine" /></span>} command={operations + " careers_adult_Critic"}/>
        <CommandDetail id="panel1" summary="Culinaire" command={operations + " culinary"}/>
        <CommandDetail id="panel1" summary={<span>Détective  <Chip size="small" label="Au travail" /></span>} command={operations + " detective"}/>
        <CommandDetail id="panel1" summary={<span>Docteur  <Chip size="small" label="Au travail" /></span>} command={operations + " doctor"}/>
        <CommandDetail id="panel1" summary="Ingénieur" command={operations + " careers_Adult_Engineer"}/>
        <CommandDetail id="panel1" summary="Juridique" command={operations + " careers_Adult_Law"}/>
        <CommandDetail id="panel1" summary="Gourou de la technologie" command={operations + " techGuru"}/>
        <CommandDetail id="panel1" summary={<span>Jardinier  <Chip size="small" label="Saisons" /></span>} command={operations + " Adult_Gardener"}/>
        <CommandDetail id="panel1" summary="Peintre" command={operations + " painter"}/>
        <CommandDetail id="panel1" summary="Photographe indépendant" command={operations + " Fashion_Photographer"}/>        
        <CommandDetail id="panel1" summary={<span>Politique  <Chip size="small" label="Vie citadine" /></span>} command={operations + " Activist"}/>
        <CommandDetail id="panel1" summary="Programmeur indépendant" command={operations + " adult_freelancer_agency_programmer"}/>
        <CommandDetail id="panel1" summary={<span>Réseaux sociaux  <Chip size="small" label="Vie citadine" /></span>} command={operations + " SocialMedia"}/>
        <CommandDetail id="panel1" summary={<span>Scientifique  <Chip size="small" label="Au travail" /></span>} command={operations + " adult_active_scientist"}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Pas implémenté
      </TabPanel>
      <TabPanel value={value} index={3}>
        Pas implémenté
      </TabPanel>
      <TabPanel value={value} index={4}>
        Pas implémenté
      </TabPanel>
      <TabPanel value={value} index={5}>
        Pas implémenté
      </TabPanel>
      <TabPanel value={value} index={6}>
        Pas implémenté
      </TabPanel>
    </Card>
  );
}

