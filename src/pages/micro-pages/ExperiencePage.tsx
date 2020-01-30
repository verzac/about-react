import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Experience from '../../components/Experience';
import { AwsIcon, SpringBootIcon, ReactIcon, NodeIcon, AwsSamIcon, AnsibleIcon, WordpressIcon, DockerIcon, KongIcon, AngularIcon } from '../../components/assets';
import MonashUniversityLogo from '../../assets/monash-university-banner.jpg';
import SapLogo from '../../assets/logo-sap.svg';
import AuspostBanner from '../../assets/devportal-banner.jpg';
import ZenaLogo from '../../assets/zena-logo.png';

const ExperiencePage: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Experience</Typography>
      <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
        <Experience
          projectTitle="Full-stack Developer @ Monash University's ERAMIS"
          projectDuration="Dec 2018 - Nov 2019"
          shortDescription="ERAMIS is a system used by Monash University to manage, audit and report on their research activities."
          bannerProps={{
            imgSrc: MonashUniversityLogo,
            title: "Monash University",
          }}
        >
          <Typography variant="h6">Technologies</Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" textAlign="center">
            <AwsIcon />
            <SpringBootIcon />
            <ReactIcon />
            <NodeIcon />
            <AwsSamIcon />
            <DockerIcon />
          </Box>
          <Typography variant="h6">Responsibilities</Typography>
          <Typography>
            <li>Backend development using AWS's Serverless Application Model (AWS SAM) and Spring Boot 2.</li>
            <li>Frontend development using React.js and Material-UI.</li>
            <li>Setting up a CI/CD pipeline, including setting up the application environment on AWS (RDS + Secrets Manager + Lambda + S3) using AWS SAM/CloudFormation.</li>
            <li>Guided the implementation of the Open ID Connect protocol within the system for authentication and authorisation.</li>
            <li>Mentoring other developers, including assigning them suitable pieces of work and helping them where necessary.</li>
          </Typography>
        </Experience>
        <Experience
          projectTitle="Project Lead/Backend Developer @ Final Year Project for SAP"
          projectDuration="Feb 2018 - Dec 2018"
          shortDescription="SAP wanted a proof of concept iOS app + IoT system to demonstrate the IoT capability of their cloud offering: SAP Cloud Platform."
          bannerProps={{
            imgSrc: SapLogo,
            title: 'SAP',
          }}
        >
          <Typography variant="caption">Trivia: The first Google Home I ever owned was a gift from SAP's representative for this project!</Typography>
          <Typography variant="h6">Technologies</Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" textAlign="center">
            <NodeIcon />
          </Box>
          <Typography variant="h6">Responsibilities</Typography>
          <Typography>
            <li>Provided technical direction for the team.</li>
            <li>Developed an IoT gateway on a Raspberry Pi using Node.js which connects our IoT devices with SAP Cloud Platform.</li>
            <li>Acting as a scrum master/product owner for the team.</li>
          </Typography>
        </Experience>
        <Experience
          projectTitle="IT Contractor/Consultant @ ZENA Indonesia"
          projectDuration="Jan 2018 - Jun 2018"
          shortDescription="ZENA is a newly-formed fashion brand and boutique which needed IT expertise in order to develop their online presence."
          bannerProps={{
            imgSrc: ZenaLogo,
            title: 'ZENA Indonesia',
          }}
        >
          <Typography variant="h6">Technologies</Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" textAlign="center">
            <AwsIcon />
            <AnsibleIcon />
            <WordpressIcon />
            <DockerIcon />
          </Box>
          <Typography variant="h6">Responsibilities</Typography>
          <Typography>
            <li>Setting up a LEMP-WordPress + MySQL using Docker Compose stack on a VPS instance, including administrating the server and ensuring appropriate security measures are in place.</li>
            <li>Setting up an Ansible deployment playbook in order to facilitate faster prototyping.</li>
          </Typography>
        </Experience>
        <Experience
          projectTitle="Industry Based Learning Web Developer @ Australia Post's Developer Portal"
          projectDuration="Jun 2017 - Dec 2017"
          shortDescription="AusPost's Developer Portal is a one-stop shop where developers can consume APIs and API publishers can publish and control their APIs."
          bannerProps={{
            imgSrc: AuspostBanner,
            title: 'Australia Post Developer Portal',
          }}
        >
          <Typography variant="h6">Technologies</Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" textAlign="center">
            <SpringBootIcon />
            <AngularIcon />
            <DockerIcon />
            <KongIcon />
          </Box>
          <Typography variant="h6">Responsibilities</Typography>
          <Typography>
            <li>Developed and enhanced both new and existing functionalities within the team’s RESTful micro-services on Spring Boot 1 (Java).</li>
            <li>Secured a newly built micro-service by implementing OpenID Connect using Spring Security.</li>
            <li>Developed and enhanced existing user interfaces running on top of AngularJS and Angular 4.</li>
            <li>Working with Kong (as our API gateway solution) in order to debug our micro-services.</li>
            <li>Working in an agile team utilising SAFe (Scaled Agile Framework for Lean Enterprises).</li>
          </Typography>
        </Experience>
      </Box>
    </>
  );
};

export default ExperiencePage;