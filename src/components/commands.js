import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CommandDetail from './detail';
import CommandDetailWithSelect from './detailWithSelect';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Argent" icon={<AttachMoneyRoundedIcon />} {...a11yProps(0)} />
          <Tab label="Carrières" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Sims" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Compétences" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel variant="" value={value} index={0}>
        <CommandDetail id="panel1" summary="Je veux un million de simflouz" command="money 1000000"/>
        <CommandDetail id="panel2" summary="Je ne veux plus payer de loyer" command="households.autopay_bills"/>
        <CommandDetail id="panel3" summary="Je veux retirer 1000 simflouz de mon portfeuille" command="sims.modify_funds -1000"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CommandDetailWithSelect id="panel4" choices={["Acteur", "Informaticien", "Policier"]} initCommand="Je suis"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Card>
  );
}

