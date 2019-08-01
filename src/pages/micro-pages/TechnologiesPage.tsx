import React from 'react';
import { Typography, Box } from '@material-ui/core';
import AwsIcon from '../../assets/logo-aws.png';
import ImageContainer from '../../components/ImageContainer';
import SpringBootIcon from '../../assets/icon-spring-boot.svg';
import ReactIcon from '../../assets/logo-react.svg';
import AngularIcon from '../../assets/angular.png';
import NodeIcon from '../../assets/node.png';
import AwsSamIcon from '../../assets/logo-sam.png';

const TechnologiesPage: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Technologies</Typography>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
        <ImageContainer imgSrc={AwsIcon} imgCaption="AWS" imgType="icon" imgAlt="AWS Logo"/>
        <ImageContainer imgSrc={SpringBootIcon} imgAlt="Spring Boot" imgCaption="Java/Spring Boot" imgType="icon"/>
        <ImageContainer imgSrc={ReactIcon} imgAlt="React" imgCaption="React.js" imgType="icon"/>
        <ImageContainer imgSrc={AngularIcon} imgAlt="Angular" imgCaption="Angular 6+" imgType="icon"/>
        <ImageContainer imgSrc={NodeIcon} imgAlt="Node.js" imgCaption="Node.js" imgType="icon"/>
        <ImageContainer imgSrc={AwsSamIcon} imgAlt="AWS SAM/Serverless" imgCaption="AWS SAM/Serverless" imgType="icon"/>
      </Box>
    </>
  );
};

export default TechnologiesPage;