import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import ForBusinessPage from "../pages/ForBusinessPage";

enum Profile {
  Recruiter = 'RECRUITER',
  Business = 'BUSINESS',
  Unknown = 'UNKNOWN',
};

interface ReceptionState {
  profile?: Profile;
};

class Reception extends React.Component<any, ReceptionState> {
  state = {
    profile: undefined,
  };

  onClickBusiness = () => {
    this.setState({ profile: Profile.Business });
  };

  onClickRecruiter = () => {
    this.setState({ profile: Profile.Recruiter });
  };

  onClickUnknown = () => {
    this.setState({ profile: Profile.Unknown });
  };

  render() {
    switch (this.state.profile) {
      case undefined:
        return (
          <>
            <Typography variant="h1">Who are you?</Typography>
            <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
              <Button color="primary" onClick={this.onClickBusiness}>I'm a business</Button>
              <Button color="primary" onClick={this.onClickRecruiter}>I'm a recruiter</Button>
              <Button onClick={this.onClickUnknown}>I'm just curious</Button>
            </Box>
          </>
        );
      default:
        return (
          <>
            <ForBusinessPage/>
          </>
        );

    }
  }
}

export default Reception;