import { Typography, Box, Button, Link } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <>
      <Typography variant="h2">404 Not Found</Typography>
      <Typography>
          It seems you have made an incorrect turn here!
      </Typography>
      <Link component={RouterLink} to="/">Take me back!</Link>
    </>
  );
};

export default NotFound;