
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import InfoCard from './info-card';

import brookgreenSculpture from '../../public/images/activities/pawleys/brookgreen-sculpture.jpg';
import brookgreenGardens from '../../public/images/activities/pawleys/brookgreen-gardens.jpg';
import brookgreenZoo from '../../public/images/activities/pawleys/brookgreen-zoo.jpg';
import hammockShops from '../../public/images/activities/pawleys/hammock-shops-village.jpg';
import beach from '../../public/images/activities/pawleys/beach.jpg';

import mountainLayersBrewing from '../../public/images/activities/bryson/mountain-layers-brewing.jpg';
import nantahalaBrewing from '../../public/images/activities/bryson/nantahala-brewing.jpg';
import clingmansDome from '../../public/images/activities/bryson/clingmans-dome.jpg';
import trainRide from '../../public/images/activities/bryson/train-ride.jpg';
import zipLine from '../../public/images/activities/bryson/zip-line.jpg';
import deepCreekLoopTrail from '../../public/images/activities/bryson/deep-creek-loop-trail.jpg';
import wesserBaldFireTower from '../../public/images/activities/bryson/wesser-bald-fire-tower-trail.jpg';
import charliesBunionTrail from '../../public/images/activities/bryson/charlies-bunion-trail.jpg';
import jumpOffTrail from '../../public/images/activities/bryson/jump-off-trail.jpg';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 200,
    },
    media: {
      height: 100,
    },
    beach: {
        backgroundColor: '#18ffff',
        color: '#ffffff',
    },
    grid: {
        color: 'green',
    }
}));

var activities = {
    bryson: [
        {
            title: 'Mountain Layers Brewing',
            link: 'https://www.mountainlayersbrewingcompany.com/',
            img: mountainLayersBrewing,
            description: 'Downtown brewery with a roof deck. A second story roof deck, but a roof deck.',
        },
        {
            title: 'Clingman\'s Dome',
            link: 'https://www.nps.gov/grsm/planyourvisit/clingmansdome.htm',
            img: clingmansDome,
            description: 'Highest point in the Great Smoky Mountains.',
        },
        {
            title: 'Train Ride',
            link: 'https://www.gsmr.com/train-excursion/Nantahala',
            img: trainRide,
            description: 'Ride along the Great Smoky Mountains Raildroad. 4.5 hours.',
        },
        {
            title: 'Nantahala Brewing',
            link: 'http://www.nantahalabrewing.com/home.html',
            img: nantahalaBrewing,
            description: 'Brewery with a cool looking taproom.',
        },
        {
            title: 'Zipline',
            link: 'https://www.greatsmokies.com/ziplines/',
            img: zipLine,
            description: 'There are a number of different companies offering a variety of exciting zipline tours in Bryson.',
        },
        {
            title: 'Deep Creek Loop Trail',
            link: 'https://www.alltrails.com/trail/us/north-carolina/deep-creek-loop-trail',
            img: deepCreekLoopTrail,
            description: 'Easy trail with beautiful waterfall views.',
        },
        {
            title: 'Wesser Bald Fire Tower Trail',
            link: 'https://www.alltrails.com/trail/us/north-carolina/wesser-bald-fire-tower-via-appalachian-trail',
            img: wesserBaldFireTower,
            description: 'Moderate trail which is 3.3 miles based on comments, but 2.2 miles by description.  Part of the Appalachian Trail.',
        },
        {
            title: 'Jump Off Trail',
            link: 'https://www.alltrails.com/explore/trail/us/tennessee/jump-off-trail-via-appalachian-trail',
            img: jumpOffTrail,
            description: 'Moderate trail which is 6.2 and is part of the Appalachian Trail. Close to Clingman\'s Dome.',
        },
        {
            title: 'Charlie\'s Bunion Trail',
            link: 'https://www.alltrails.com/trail/us/tennessee/charlies-bunion-via-appalachian-trail',
            img: charliesBunionTrail,
            description: 'Moderate trail which is 8.6 and is part of the Appalachian Trail. Close to Clingman\'s Dome.',
        },
    ],
    pawleys: [
        {
            title: 'Brookgreen: Sculpture Garden',
            link: 'https://www.brookgreen.org/american-sculpture',
            img: brookgreenSculpture,
            description: "Largest outdoor sculpture park in the US. Part of Brookgreen Gardens.",
        },
        {
            title: 'Brookgreen: Botanical Gardens',
            link: 'https://www.brookgreen.org/botanical-gardens',
            img: brookgreenGardens,
            description: "Beautiful professionally landscaped gardens. Part of Brookgreen Gardens.",
        },
        {
            title: 'Brookgreen: Lowcountry Zoo',
            link: 'https://www.brookgreen.org/lowcounty-zoo',
            img: brookgreenZoo,
            description: "Zoo filled with animals native to the Lowcountry. Part of Brookgreen Gardens.",
        },
        {
            title: 'The Hammock Shops',
            link: 'http://www.thehammockshops.com/',
            img: hammockShops,
            description: "Shopping location with local vendors, restaurants and events.",
        },
        {
            title: 'Beach!',
            link: 'https://www.townofpawleysisland.com/beach-access-parking/',
            img: beach,
            description: "White sand beaches for miles. Perfect for reading, swimming, rest and relaxation.",
        },
    ],
};

export default function ActivityDetails(props) {
    const classes = useStyles();

    //Called each time an activity selection changes
    function calculateActivities() {
        console.log("props loc", props.location);
        if (!props.location){return}
        let current_activities = activities[props.location].filter(function(activity){
            console.log("Looking into", activity);
            return activity.selected;
        })
        props.setAppActivities(current_activities);
    }

    let activity_section;
    if (props.location) {
        activity_section = activities[props.location].map(function (activity, index) {
            return <Grid item key={index}><InfoCard clickAction={calculateActivities} info={activity} /></Grid>;
        });
    }
    else {
        activity_section = <Grid item><Typography color="secondary">Please Select a Location First.</Typography></Grid>;
    }

    return (
        <Grid
            className={classes.grid}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
        >
            {activity_section}
        </Grid>
    );

}