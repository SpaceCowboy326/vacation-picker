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
        marginTop: '20px',
    },
    secondParagraph: {
    },
}));


const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(0),
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
    height: '450px',
    padding: theme.spacing(3),
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
              HOORAY!!!
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={closeModal}>I Love You   <FavoriteIcon /></Button>
        </DialogActions>
      </Dialog>
    );
}