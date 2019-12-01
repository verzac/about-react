import React from 'react';
import { Typography, withStyles, WithStyles, createStyles, AppBar, Toolbar, Button, Theme, createMuiTheme } from '@material-ui/core';
import HomePage from './pages/HomePage';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
import Routing from './utils/Routing';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ContactMeForm from './components/ContactMeForm';
import { reactAppVersion, reactAppName } from './constants';

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
  },
  content: {
    marginTop: theme.spacing(3),
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: 'start',
  },
  footer: {
    paddingTop: '22px',
    paddingBottom: '22px',
  },
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
      fontWeight: 300,
    },
    h4: {
      fontSize: '1.5rem',
    },
  },
  // overrides: {
  //   MuiTypography: {
  //     root: {
  //       fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  //     },
  //   }
  // }
});

const App: React.FC<WithStyles<typeof styles>> = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={Routing.history}>
        <div className={classes.root}>
          <AppBar position="sticky">
            <Toolbar>
              {/* <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton> */}
              <Typography className={classes.title}>
                Benjamin Tanone
              </Typography>
              <Button color="inherit" onClick={() => Routing.goTo('/')}>Home</Button>
              <Button color="inherit" onClick={() => Routing.goTo('/contact')}>Contact Me</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <Switch>
              <Route exact path={['/', '/home']} component={HomePage} />
              <Route exact path={['/contact']} component={ContactMeForm} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Typography className={classes.footer}>
            {reactAppName}@{reactAppVersion} | <a target="_blank" rel="noopener noreferrer" href="https://github.com/verzac/about-react">GitHub Repo</a>
          </Typography>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
