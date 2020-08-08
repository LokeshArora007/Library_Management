import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
}));

const Home = (props) => {
  const classes = useStyles();
  
  return (
    <>
      <Grid container>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Home
        </Typography>
        <Grid item xs={12} md={12} lg={12}>
          Home page
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Home);
