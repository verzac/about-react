import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { AwsIcon, SpringBootIcon, ReactIcon, AngularIcon, NodeIcon, AwsSamIcon, DockerIcon, KongIcon } from '../../components/assets';

const TechnologiesPage: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Technologies</Typography>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
        <AwsIcon/>
        <SpringBootIcon/>
        <ReactIcon/>
        <NodeIcon/>
        <AwsSamIcon/>
        <DockerIcon/>
        <AngularIcon/>
        <KongIcon/>
      </Box>
    </>
  );
};

export default TechnologiesPage;