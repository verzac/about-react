import React from 'react';
import { Typography, FormControl, TextField, Box, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { ContactFormService, ContactForm } from '../services/ContactFormService';

interface ContactMeFormState {
  isLoading: boolean;
  errorMessage?: string;
};

const styles = (theme: Theme) => createStyles({
  textField: {
    margin: theme.spacing(1),
  },
});

class ContactMeForm extends React.Component<WithStyles<typeof styles>, ContactMeFormState> {
  state = {
    isLoading: true,
    errorMessage: undefined,
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography variant="h1">Get in touch with me!</Typography>
        <form>
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
            <TextField
              className={classes.textField}
              required
              id="first-name"
              label="First Name"
              margin="normal"
            />
            <TextField
              className={classes.textField}
              required
              id="last-name"
              label="Last Name"
              margin="normal"
            />
            <TextField
              className={classes.textField}
              required
              id="message"
              label="Last Name"
              margin="normal"
            />
          </Box>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(ContactMeForm);