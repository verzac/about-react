import React from 'react';
import { Typography, WithStyles, withStyles, Box, Theme, Button } from '@material-ui/core';
import profilePicture from '../assets/profile-picture.jpg';
import ImageContainer from '../components/ImageContainer';
import LinkedInIcon from '../assets/linkedin-brands.svg';
import GitHubIcon from '../assets/github-brands.svg';
import SkillsPage from './SkillsPage';
import Reception from '../components/Reception';

const styles = (theme: Theme) => ({
  name: {
    // fontWeight: 500,
  },
  profilePicture: {
    borderRadius: '50%',
    // border: '2px solid gray',
  },
  sections: {
    marginBottom: theme.spacing(1),
  },
});

const Home: React.FC<WithStyles<typeof styles>> = (props) => {
  const { classes } = props;
  return (
    <>
      <section className={classes.sections}>
        <ImageContainer imgAlt="Profile Picture" imgSrc={profilePicture} className={classes.profilePicture} />
        <Typography gutterBottom={true} className={classes.name} variant="h1">
          Benjamin Tanone
        </Typography>
        <Typography>
          Software Engineer. Coffee-Lover.
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
          <a href="https://www.linkedin.com/in/benjamin-tanone/" target="_blank" rel="noopener noreferrer">
            <ImageContainer imgAlt="LinkedIn Link" imgSrc={LinkedInIcon} imgType="icon" />
          </a>
          <a href="https://github.com/verzac" target="_blank" rel="noopener noreferrer">
            <ImageContainer imgAlt="GitHub Link" imgSrc={GitHubIcon} imgType="icon" />
          </a>
        </Box>
      </section>
      <section className={classes.sections}>
        <Reception/>
      </section>
    </>
  );
}

export default withStyles(styles)(Home);