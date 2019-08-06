import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Done from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
    card: {
      width: 200,
      maxHeight: 300,
    },
    media: {
      height: 80,
    },
    doneIcon: {
        color: theme.palette.secondary.main,
    },
    titleText: {
        fontSize: '12px',
        fontWeight: 'bold',
        height: '30px',
    },
    descriptionText: {
        fontSize: '12px',
        height: '50px',
    },
}));

export default function InfoCard(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selected, setSelected] = useState(false);

    function toggleSelected() {
        setSelected(!selected);
        props.info.selected = !selected;
        if (props.clickAction) {
            console.log("CLICKY");
            props.clickAction();
        }
        console.log(props.info);
    }

    let selected_section;
    if (selected) {
        selected_section = <Done className={classes.doneIcon} />;
    }

    function openLearnMoreLink() {
        window.open(props.info.link, '_blank');
    }

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={toggleSelected} color="secondary">
                <CardMedia
                    className={classes.media}
                    image={props.info.img}
                    title={props.info.title}
                />
                <CardContent>
                    <Typography gutterBottom className={classes.titleText}>
                        {props.info.title}
                    </Typography>
                    <Typography className={classes.descriptionText}>
                        {props.info.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" onClick={openLearnMoreLink}>
                    Learn More
                </Button>
                {selected_section}
            </CardActions>
    </Card>
    );
}