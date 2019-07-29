import React from 'react';
import { Typography, Box } from '@material-ui/core';
import AwsIcon from '../assets/aws-brands.svg';
import ImageContainer from '../components/ImageContainer';
import JavaIcon from '../assets/java-brands.svg';

const SkillsPage: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Skills</Typography>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
        <ImageContainer imgSrc={AwsIcon} imgCaption="AWS" imgType="icon" imgAlt="AWS Logo"/>
        <ImageContainer imgSrc={JavaIcon} imgAlt="Java Icon" imgCaption="Java/Spring Boot" imgType="icon"/>
      </Box>
    </>
  );
};

export default SkillsPage;