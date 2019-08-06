//import './App.css';
//import './components/button.js';
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
//import Link from '@material-ui/core/Link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import ProTip from './ProTip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import LocationDetails from './components/location-details'
import TimingDetails from './components/timing-details'
import ActivityDetails from './components/activity-details'
import LodgingDetails from './components/lodging-details'
import RestaurantDetails from './components/restaurant-details'


import HappyBirthday from './components/hb'
import CompletionModal from './components/completion-modal'

import beachTheme from './themes/beach-theme';
import mountainTheme from './themes/mountain-theme';

//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}


//import zugzug from '../public/images/locations/zugzug.jpg';


//const locations = ["Location-1", "Location-2"];

const locations = {
  bryson: {
    theme: mountainTheme,
    title: 'Bryson City',
  },
  pawleys: {
    theme: beachTheme,
    title: 'Pawley\'s Island',
  }
};

//Copied from the ExpansionPanel default box-shadow, for consistency
let box_shadow_val = '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';
let base_background_url = '../public/images/locations/bryson-background.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    width: '50%'
  },
  panel: {
    color: theme.palette.secondary.main,
  },
  media: {
    height: 140,
  },
  saveButton: {
    backgroundColor: '#ffffff',
    borderRadius: '0',
    boxShadow: box_shadow_val,
    float: 'right',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    boxShadow: box_shadow_val,
    //float: 'right',
    marginBottom: '10px',
    padding: '5px',
  },
  clearFix: {
    clear: 'both',
  },
  page: {
    backgroundImage: `url(${ base_background_url })`,
    //backgroundColor: '#eeeeee',
    //marginBottom: '50px',
  },
  summaryText: {
    color: theme.palette.secondary.main,
    float: 'right',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  endSummaryText: {
    display: 'block',
    float: 'right',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    width: '500px',
  },
  happyBirthday: {
    height: '500px',
    paddingTop: '100px',
    //width: '500px'
  },
  happyBirthdayText: {
    display: 'block',
    fontSize: '80px',
    fontWeight: 'bold',
    marginBottom: '25px',
    textAlign: 'center',
    width: '700px',
    //width: '500px'
  }

}));


export default function App(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [location, setLocation] = useState(null);
  const [title, setTitle] = useState('Choose your Getaway');
  const [duration, setDuration] = useState('1');
  const [date, setDate] = useState(null);
  const [activities, setActivities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [completionModalOpen, setCompletionModalOpen] = useState(false);
  const [collapse, setCollapse] = useState(true);


  const size = useWindowSize();

  const [dataComplete, setDataComplete] = useState(false);


  function setAppLocation(location_name) {
    setLocation(location_name);
    setAppTheme(location_name);
    setTitle(locations[location_name].title);
    setActivities([]);
  }

  function setAppTheme(location_name) {
    props.setMainTheme(locations[location_name].theme);
  }

  function openCompletionModal() {
    setCompletionModalOpen(true);
    console.log(getGetawayState());
  }
  
  function getGetawayState() {
    return {
      date: date,
      duration: duration,
      activities: activities,
      restaurants: restaurants,
      location: location,
    };
  }

  let getaway = getGetawayState();

  function collapseApp() {
    console.log(getaway);
    setCollapse(false);
  }


  if (
      !dataComplete &&
      location &&
      duration &&
      date &&
      activities.length > 0 &&
      restaurants.length > 0
  ) {
    setDataComplete(true);
  }
  
  
  let activity_string = '',
    restaurant_string = '',
    date_string = '',
    duration_string = '';

  //We are on the end screen, need to display trip as text
  if (!collapse) {
    activity_string = Array.prototype.map.call(activities, a=> a.title).toString();
    restaurant_string = Array.prototype.map.call(restaurants, r=> r.title).join(', ');
    let datier_date = new Date(date);
    date_string = datier_date.toString();
    if (duration > 1) {
      duration_string = duration + ' days';
    }
    else {
      duration_string = duration + ' day';
    }
  }


  //<TimingDetails setAppDuration="setDuration" />
  return (
    <Container className={classes.page} maxWidth="md">
      <Collapse in={!collapse} id="hb_section">
        <Confetti
          width={size.width}
          height={size.height}
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={5}
          className={classes.happyBirthday}
        >

          <Typography className={classes.happyBirthdayText} color="secondary" variant="h4" component="h1" gutterBottom>
            HAPPY BIRTHDAY SAMBO!
          </Typography>
          <Typography className={classes.endSummaryText}>
            You are headed to {title} sometime around {date}. Over the course of {duration_string},
            we're going to try to get to all these activities:
          </Typography>
          <Typography className={classes.endSummaryText} paddingLeft="20px" color="secondary"> {activity_string}</Typography>
          <Typography className={classes.endSummaryText}>
          When we get hungry, we'll look to eat at these fine establishments:
          </Typography>
          <Typography className={classes.endSummaryText} paddingLeft="20px" color="secondary">{restaurant_string}</Typography>
          <Typography className={classes.endSummaryText}>
          Hopefully you saw some places you'd like to stay at!
          </Typography>

        </Grid>
      </Collapse>
      <Collapse in={collapse} id="collapse_section">
        <Box my={4}>
          <Box className={classes.titleContainer}>
            <Typography variant="h4" component="h1" gutterBottom>
              {title}
            </Typography>
          </Box>


          <ExpansionPanel color="primary">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Destination...</Typography>
              <Typography className={classes.summaryText}> [ {title} ] </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <LocationDetails setAppLocation={setAppLocation} />

            </ExpansionPanelDetails>
          </ExpansionPanel>


          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Timing...</Typography>
              {duration && date && <Typography className={classes.summaryText}> [ {duration} days around {date} ] </Typography>}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TimingDetails setAppDuration={setDuration} setAppDate={setDate} />
            </ExpansionPanelDetails>
          </ExpansionPanel>


          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Activities...</Typography>
              { (activities.length > 0) && <Typography className={classes.summaryText}> [ {activities.length} activities selected ] </Typography> }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <ActivityDetails setAppActivities={setActivities} location={location} />

            </ExpansionPanelDetails>
          </ExpansionPanel>


          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Lodging...</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <LodgingDetails setAppActivities={setActivities} location={location} duration={duration} date={date} />

            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Restaurants...</Typography>
              { (restaurants.length > 0) && <Typography className={classes.summaryText}> [ {restaurants.length} restaurants selected ] </Typography> }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <RestaurantDetails setAppRestaurants={setRestaurants} location={location} />

            </ExpansionPanelDetails>
          </ExpansionPanel>

          <Button className={classes.saveButton} color="secondary" onClick={openCompletionModal} disabled={!dataComplete}>Save your Getaway</Button><div className={classes.clearfix}></div>
        </Box>
        <CompletionModal closeAction={collapseApp} setModalOpen={setCompletionModalOpen} modalOpen={completionModalOpen}/>
        </Collapse>
    </Container>
  );
};
