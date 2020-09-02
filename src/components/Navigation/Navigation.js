import React, { useContext } from 'react';

import { UserContext } from '../../App';

import { makeStyles } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  toolbar: { display: 'flex', justifyContent: 'space-between' },
}));

function Navigation() {
  const userContext = useContext(UserContext);

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4">React Hooks</Typography>
          <Typography variant="h5">{userContext.name}</Typography>
          <Typography variant="h6">
            YouTube Subscribers: {userContext.count}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
