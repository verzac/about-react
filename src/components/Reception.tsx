import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import ForBusinessPage from "../pages/ForBusinessPage";
import { Profile, ProfileService } from "../services/ProfileService";

interface ReceptionState {
  profile?: Profile;
};

class Reception extends React.Component<any, ReceptionState> {
  state = {
    profile: undefined,
  };

  componentDidMount() {
    ProfileService.getCurrentProfile()
      .then(profile => this.setState({ profile: profile }));
  }

  onClearProfile = () => {
    this.changeProfile(undefined);
  };

  onClickBusiness = () => {
    this.changeProfile('business');
  };

  onClickRecruiter = () => {
    this.changeProfile('recruiter');
  };

  onClickUnknown = () => {
    this.changeProfile('unknown');
  };

  changeProfile = (profile?: Profile) => {
    this.setState({ profile: profile });
    ProfileService.setProfile(profile);
  };

  render() {
    const { profile } = this.state;
    // if (profile === undefined || profile === 'unknown') {
    return (
      <>
        {
          (profile === undefined || profile === 'unknown') ? (
            <>
              <Typography variant="h1">Who are you?</Typography>
              <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                <Button color="primary" onClick={this.onClickBusiness}>I'm a business</Button>
                <Button color="primary" onClick={this.onClickRecruiter}>I'm a recruiter</Button>
                <Button onClick={this.onClickUnknown}>I'm just curious</Button>
              </Box>
            </>
          ) : (
              <Button onClick={this.onClearProfile}>Not a {profile}? Click here to change who you are.</Button>
            )}
        {profile === 'business' && <ForBusinessPage />}
      </>
    );
  }
}

export default Reception;