import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';


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
    }
}));
  

export default function TimingDetails(props) {
    const classes = useStyles();
    const[duration, setDuration] = React.useState('1');
    const[date, setDate] = React.useState(null);

    function handleDurationChange(event) {
      props.setAppDuration(event.target.value);
      setDuration(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
        props.setAppDate(event.target.value);
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            //alignItems="baseline"
            spacing={10}
        >
            <Grid item>
                <FormLabel component="legend">How long would you like to stay?</FormLabel>
                <RadioGroup aria-label="position" name="position" value={duration} onChange={handleDurationChange} row>
                    <FormControlLabel
                        control={<Radio color="primary" />}
                        value="1"
                        label="1 Day"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2 Days"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3 Days"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </Grid>
            <Grid item>
                <FormLabel component="legend">Preferred Date?</FormLabel>
                <TextField 
                    id="data"
                    type="date"
                    className={classes.datePicker}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateChange}
                />
            </Grid>
        </Grid>
    );
}