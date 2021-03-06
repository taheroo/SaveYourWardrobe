import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import {uri} from "../UrlBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ShowedItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/images/zara.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Item name 
                </Typography>
                <Typography variant="body2" gutterBottom>
                   Descreption about the item
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="text" color="primary" onClick={()=>{props.showAlert(true);props.nexItem()}}>Correct image ?</Button>
              <Button variant="text" color="primary" onClick={()=>props.showIt(false)}>It's not</Button>
            </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}