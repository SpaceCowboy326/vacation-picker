
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import pawleys from '../../public/images/locations/pawleys-island.jpg';
import bryson from '../../public/images/locations/bryson-city.jpg';


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
    locationDescriptionText: {
        height: '100px',
    }
}));
  

export default function LocationDetails(props) {
    const classes = useStyles();

    function setLocationPawleys() {
        props.setAppLocation("pawleys");
    }
    
    function setLocationBryson() {
        props.setAppLocation("bryson");
    }

    function openLearnMoreLinkPawleys(){
        const url = 'https://www.pawleysisland.com/';
        window.open(url, '_blank');
    }

    function openLearnMoreLinkBryson() {
        const url = 'https://www.greatsmokies.com/';
        window.open(url, '_blank');
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
        >
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea onClick={setLocationPawleys} color="secondary">
                        <CardMedia
                            className={classes.media}
                            image={pawleys}
                            title="Pawley's Island"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Pawley's Island
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" className={classes.locationDescriptionText}>
                                Beach town on the south side of Myrtle Beach which is supposed to be a bit quieter than the rest of the stretch.
                                Not as many activities available, but we can spend as much time at the beach as you desire!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="secondary" onClick={openLearnMoreLinkPawleys}>
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea onClick={setLocationBryson}>
                        <CardMedia
                            className={classes.media}
                            image={bryson}
                            title="Bryson City"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Bryson City
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div" className={classes.locationDescriptionText}>
                                Quiet mountain town located in North Carolina and bordering the Great Smoky Mountain National Park. Great home base for a weekend full
                                of outdoor exploration, tasty food and maybe even some local craft brews.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="secondary" onClick={openLearnMoreLinkBryson}>
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );

}