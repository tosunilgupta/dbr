import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderBar from './HeaderBar';
import '../style/index.css';

const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
      padding:0,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
      padding:0,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.main,
      padding:0,
    },
  },
});

function MediaQuery(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <HeaderBar />
    </div>
  );
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaQuery);
