import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import InfoCard from './info-card';

import chiveBlossom from '../../public/images/restaurants/pawleys/chive-blossom.png';
import bistro217 from '../../public/images/restaurants/pawleys/bistro217.jpg';
import rusticTable from '../../public/images/restaurants/pawleys/rustic-table.jpg';
import giosItalianKitchen from '../../public/images/restaurants/pawleys/gios-italian-kitchen.jpg';
import caffePiccolo from '../../public/images/restaurants/pawleys/caffe-piccolo.jpg';
import getCarriedAway from '../../public/images/restaurants/pawleys/get-carried-away.jpg';

import bistroAtTheEverett from '../../public/images/restaurants/bryson/bistro-at-the-everett.jpg';
import greatSmokyMountainsWinery from '../../public/images/restaurants/bryson/great-smoky-mountains-winery.jpg';
import fillingStationDeli from '../../public/images/restaurants/bryson/filling-station-deli.jpg';
import snakShack from '../../public/images/restaurants/bryson/snak-shack.jpg';
import riversEnd from '../../public/images/restaurants/bryson/rivers-end.jpg';
import bootsSteakhouse from '../../public/images/restaurants/bryson/boots-steakhouse.jpg';

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

var restaurants = {
    bryson: [
        {
            title: 'Bistro at The Everett',
            link: 'https://www.theeveretthotel.com/bistro.html',
            img: bistroAtTheEverett,
            description: 'Upscale (?) italian themed restaurant with craft cocktails and beer.',
        },
        {
            title: 'Great Smoky Mountains Winery',
            link: 'https://www.facebook.com/greatsmokymountainswinery/',
            img: greatSmokyMountainsWinery,
            description: 'Pizza and pub fare witha great qine selection and occasional live music.',
        },
        {
            title: 'The High Test Deli & Sweets',
            link: 'https://www.thefillingstationdeli.com/',
            img: fillingStationDeli,
            description: 'Deli for a quick lunch and some tasty sweets.',
        },
        {
            title: 'Snak Shack',
            link: 'https://www.yelp.com/biz/snak-shack-bryson-city',
            img: snakShack,
            description: 'Quick (unhealthy) lunch option!',
        },
        {
            title: 'Rivers End Restaurant',
            link: 'https://noc.com/places/restaurants/rivers-end-restaurant',
            img: riversEnd,
            description: 'Cheap Lunch/Dinner. Looks like the view would be really pretty.',
        },
        {
            title: 'Boots Steakhouse',
            link: 'https://www.bootssteakhouse.com/dinner-menu',
            img: bootsSteakhouse,
            description: 'Upscale steak dinner. Bit of a drive from Bryson.',
        },
    ],
    pawleys: [
        {
            title: 'Rustic Table',
            link: 'http://www.rustictable.com/',
            img: rusticTable,
            description: "Upscale southern food for breakfast lunch or dinner.",
        },
        {
            title: 'Chive Blossom',
            link: 'https://chiveblossom.com/',
            img: chiveBlossom,
            description: "Upscale Southern classics with Mediterranean, French and Asian influences.",
        },
        {
            title: 'Bistro 217',
            link: 'http://www.bistro217.com',
            img: bistro217,
            description: "Upscale seafood, steaks and pasta.",
        },
        {
            title: 'Gios Italian Kitchen',
            link: 'https://www.giositaliankitchen.com/',
            img: giosItalianKitchen,
            description: "Upscale Italian dinner.  Yes they're all upscale.",
        },
        {
            title: 'Caffe Piccolo!',
            link: 'http://caffepiccolopawleys.com/',
            img: caffePiccolo,
            description: "Classic yet unique Italian fare, plus fine wine!",
        },
        {
            title: 'Get Carried Away',
            link: 'https://getcarriedawaypi.com/menu.php',
            img: getCarriedAway,
            description: "Cheap southern themed takeout/catering with yummy dessert options",
        },
        
    ],
};

export default function RestaurantDetails(props) {
    const classes = useStyles();

    //Called each time an restaurant selection changes
    function calculateRestaurants() {
        console.log("props loc", props.location);
        if (!props.location){return}
        let current_restaurants = restaurants[props.location].filter(function(restaurant){
            console.log("Looking into", restaurant);
            return restaurant.selected;
        })
        props.setAppRestaurants(current_restaurants);
    }

    let restaurant_section;
    if (props.location) {
        restaurant_section = restaurants[props.location].map(function (restaurant, index) {
            return <Grid item key={index}><InfoCard clickAction={calculateRestaurants} info={restaurant} /></Grid>;
        });
    }
    else {
        restaurant_section = <Grid item><Typography color="secondary">Please Select a Location First.</Typography></Grid>;
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
            {restaurant_section}
        </Grid>
    );

}