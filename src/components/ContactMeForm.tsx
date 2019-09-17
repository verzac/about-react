import React from 'react';
import { Typography, FormControl, TextField, Box, Theme, createStyles, withStyles, WithStyles, Select, MenuItem, InputLabel, Button, Snackbar, IconButton } from '@material-ui/core';
import { ContactFormService, ContactForm } from '../services/ContactFormService';
import CloseIcon from '@material-ui/icons/Close';

interface ContactMeFormState {
  isLoading: boolean;
  errorMessage?: string;
  form: Partial<ContactForm>;
  showSuccess: boolean;
};

const styles = (theme: Theme) => createStyles({
  input: {
    margin: theme.spacing(1),
    width: '39%',
    textAlign: 'left'
  },
});

class ContactMeForm extends React.Component<WithStyles<typeof styles>, ContactMeFormState> {
  state = {
    isLoading: false,
    showSuccess: false,
    errorMessage: undefined,
    form: {
      email: '',
      message: '',
      reason: "",
      firstName: '',
      lastName: '',
    },
  };

  onChange = (event: any) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      }
    });
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
    });
    event.preventDefault();
    ContactFormService.submitContactForm(this.state.form)
      .catch(e => {
        console.error(e);
        this.setState({ isLoading: false, errorMessage: 'Unable to submit contact form. Please try again later, or get in touch with me through https://linkedin.com/in/benjamin-tanone/' });
      })
      .then(() => this.setState({ isLoading: false, showSuccess: true }));
  };

  onCloseSnackbar = () => this.setState({ showSuccess: false });

  render() {
    const { classes } = this.props;
    const { form, isLoading, errorMessage } = this.state;
    return (
      <>
        <Typography variant="h1">Get in touch with me!</Typography>
        <form onSubmit={this.onSubmit}>
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
            <TextField
              className={classes.input}
              required
              id="first-name"
              label="First Name"
              margin="normal"
              name="firstName"
              value={form.firstName}
              onChange={this.onChange}
            />
            <TextField
              className={classes.input}
              required
              id="last-name"
              label="Last Name"
              name="lastName"
              margin="normal"
              onChange={this.onChange}
            />
            <TextField
              className={classes.input}
              required
              id="email"
              label="Email"
              name="email"
              margin="normal"
              type="email"
              onChange={this.onChange}
            />
            <FormControl margin="normal" className={classes.input} required>
              <InputLabel htmlFor="reason">Reason</InputLabel>
              <Select
                required
                id="reason"
                name="reason"
                value={form.reason}
                onChange={this.onChange}
              >
                <MenuItem value="" disabled><em>Reason for contacting</em></MenuItem>
                <MenuItem value="EMPLOYMENT">Recruitment/Employment</MenuItem>
                <MenuItem value="BUSINESS">Business</MenuItem>
                <MenuItem value="GENERAL">General Inquiry</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.input}
              required
              id="message"
              label="Message"
              name="message"
              margin="normal"
              multiline
              onChange={this.onChange}
            />
          </Box>
          <Button variant="contained" type="submit" color="primary" disabled={isLoading}>Send!</Button>
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
          <Snackbar
            open={this.state.showSuccess}
            // autoHideDuration={20000}
            onClose={this.onCloseSnackbar}
            message="Contact form has been successfully submitted! I'll get back to you in 1 business day :)"
            action={
            <IconButton
              color="inherit"
              onClick={this.onCloseSnackbar}
            >
              <CloseIcon/>
            </IconButton>}
          />
        </form>
      </>
    );
  }
}

export default withStyles(styles)(ContactMeForm);