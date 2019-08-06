import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
//        height: '100px',
    },
    firstParagraph: {
        marginBottom: '20px',
    }
}));


const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});
  
const DialogContent = withStyles(theme => ({
root: {
    height: '500px',
    padding: theme.spacing(2),
},
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
root: {
    margin: 0,
    padding: theme.spacing(1),
},
}))(MuiDialogActions);


export default function CompletionModal(props) {
    const classes = useStyles();
    function closeModal() {
        props.setModalOpen(false);
        if (props.closeAction) {
            props.closeAction();
        }
    }

    return (
      <Dialog
          open={props.modalOpen}
      >
        <DialogContent dividers>
            <Typography gutterBottom variant="h5" component="h2">
                Dear Sam,
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.firstParagraph}>
                How much we've done in a year. It's hard to believe that on your last birthday, equity-less, engagement-less and
                living in a busy Boston suburb. I'm so happy to see you making new friends and truly trying to make the best out
                of every single day we've spent living down south. Even hundreds of miles from home, you keep me busy enough that
                I've barely had time to miss it. There is no one in the world I would rather share these experiences with than you.
                You are sweet, thoughtful, and always two steps ahead planning our next move. I'm so grateful for everything you
                do, from cooking and cleaning to just putting up with some of my weird quirks.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.secondParagraph}>
                I know that you don't really care for technology. I know that a web application doesn't have the same natural beauty
                as a good book, or a painting, or a lovingly crafted piece of music. But this is what I know how to do. So I made an
                application that is just for you - just so that you can pick a perfect getaway. As you know well, my projects often
                fall apart due to lack of interest or motivation. I can honestly say that I am happy with what I was able to create
                here, and that there is no way I could have done it without you. Making something for you is what kept me focused,
                and the only reason most of this project works. I love you Sam, and I hope you have a very happy birthday.
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={closeModal}>I Love You   <FavoriteIcon /></Button>
        </DialogActions>
      </Dialog>
    );
}