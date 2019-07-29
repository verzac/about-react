import React from 'react';
import logo from './logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, withStyles, WithStyles, createStyles, AppBar, Toolbar, IconButton, Button, makeStyles, Theme, createMuiTheme } from '@material-ui/core';
import HomePage from './pages/HomePage';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import Routing from './utils/Routing';
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    flexGrow: 1
  },
  content: {
    marginTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: 'start',
  }
});

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
  },
});

const App: React.FC<WithStyles<typeof styles>> = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={Routing.history}>
        <div className={classes.root}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title}>
                Benjamin Tanone
          </Typography>
              <Button color="inherit" onClick={() => Routing.goTo('/')}>Home</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <Switch>
              <Route exact path={['/', '/home']} component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
