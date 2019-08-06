import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
//import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import TextField from '@material-ui/core/TextField';

//Copied from the ExpansionPanel default box-shadow, for consistency
let box_shadow_val = '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    beach: {
        backgroundColor: '#18ffff',
        color: '#ffffff',
    },
    datePicker: {
        color: "#000000",
        marginTop: 5,//theme.spacing(1),
    },
    linkContainer: {
//        backgroundImage: 'url(' + base_background_url + ")",
        //backgroundImage: `url(${bg})`
    },
    airbnbButton: {
        backgroundColor: '#ffffff',
        borderRadius: '0',
        boxShadow: box_shadow_val,
        fontWeight: 'bold',
        marginLeft: '10px',
    },
}));

const urls = {
    bryson: 'https://www.airbnb.com/s/Bryson-City--NC/homes?place_id=ChIJVSryz11IWYgRhXebKK3DiYQ',
    pawleys: 'https://www.airbnb.com/s/Pawleys-Island--SC/homes?place_id=ChIJ04KscAIxAIkR0ijk7xUzPbk',
}

function getUrl(location, duration, date) {
    if (!location || !duration || !date) {return}

    let base_url = urls[location];
    console.log("dateee", date);
    let checkin_date = new Date(date);
    let numeric_duration = parseInt(duration);
    let checkout_date = new Date(date);
    console.log("checkout_date", checkout_date);
    checkout_date.setDate(checkout_date.getDate() + numeric_duration);
    let checkin_string = checkin_date.getFullYear() + "-" + (checkin_date.getMonth() + 1) + "-" + checkin_date.getDate();
    let checkout_string = checkout_date.getFullYear() + "-" + (checkout_date.getMonth() + 1) + "-" + checkout_date.getDate();

    console.log("checkout_date", checkout_date);
    console.log("checkout_str", checkout_string);

    let parameters = "&checkin=" + checkin_string +
        "&checkout=" + checkout_string;
    return base_url + parameters;
}

export default function LodgingDetails(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const[duration, setDuration] = React.useState('1');
    const[date, setDate] = React.useState(null);
    const url = getUrl(props.location, props.duration, props.date);
    console.log("url", url);

    function handleDurationChange(event) {
      props.setAppDuration(event.target.value);
      setDuration(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
        props.setAppDate(event.target.value);
    }

    function openLink() {
        window.open(url, '_blank');
    }

    let lodging_section;
    if (url) {
        lodging_section = <Box><Typography component="span">Check your dates on </Typography>
            <Button className={classes.airbnbButton} color="secondary" size="large" onClick={openLink}>Airbnb</Button></Box>;
    }
    else {
        lodging_section = <Typography component="span">You'll need to select a location, date and duration first!</Typography>
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.linkContainer}
            spacing={10}
        >
            <Grid item>
                    {lodging_section}
                    
            </Grid>
        </Grid>
    );
}