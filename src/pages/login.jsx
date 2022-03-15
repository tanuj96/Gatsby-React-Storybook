/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../components/login';
import UserContext from '../utils/user-context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function LoginPage({ isLogin, login }) {
  const classes = useStyles();
  const [user, setUser] = useState({ isUser: false, userName: '' });

  return (
    <div className={classes.root}>
      <UserContext.Provider value={{ user }}>
        <Login isLogin={isLogin} login={login} />
      </UserContext.Provider>
    </div>
  );
}
