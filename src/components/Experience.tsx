import { Typography, Box, Card, CardHeader, CardContent, CardActions, IconButton, Collapse, createStyles, WithStyles, withStyles, Theme, Button, ListItem, List, ListItemText, CardMedia } from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ExperienceState {
  isExpanded: boolean;
}

interface BannerProps {
  imgSrc: string;
  title: string;
}

interface ExperienceProps {
  shortDescription: string;
  projectTitle: string;
  projectDuration: string;
  bannerProps?: BannerProps;
}

const styles = (theme: Theme) => createStyles({
  baseExpansionClass: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expanded: {
    transform: 'rotate(180deg)',
  },
  notExpanded: {
    transform: 'rotate(0deg)',
  },
  cardContainer: {
    maxWidth: '450px',
    margin: theme.spacing(2),
    textAlign: 'left',
    // marginRight: theme.spacing(2),
  }
});

class Experience extends React.Component<WithStyles<typeof styles> & ExperienceProps, ExperienceState> {
  state = {
    isExpanded: false,
  };

  onExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const { isExpanded } = this.state;
    const { bannerProps, classes, children, projectTitle, projectDuration, shortDescription } = this.props;
    return (
      <div>
        <Card className={classes.cardContainer}>
          <CardHeader title={projectTitle} subheader={projectDuration}  />
          {bannerProps && (<CardMedia style={{height: '140px', backgroundSize: 'contain'}} image={bannerProps.imgSrc} title={bannerProps.title}/>)}
          <CardContent>
            <Typography>
              {shortDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={this.onExpand}
              className={classes.baseExpansionClass}
            >
              <Typography>Read {isExpanded ? 'less' : 'more'}</Typography>
              <ExpandMoreIcon className={`${isExpanded ? classes.expanded : classes.notExpanded}`} />
            </Button>
          </CardActions>
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              {children}
              {/* <section>
                <Typography variant="h6">Technologies</Typography>
                <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" textAlign="center">
                  <ImageContainer imgSrc={AwsIcon} imgCaption="AWS" imgType="icon" imgAlt="AWS Logo" />
                  <ImageContainer imgSrc={SpringBootIcon} imgAlt="Spring Boot" imgCaption="Java/Spring Boot" imgType="icon" />
                  <ImageContainer imgSrc={ReactIcon} imgAlt="React" imgCaption="React.js" imgType="icon" />
                  <ImageContainer imgSrc={NodeIcon} imgAlt="Node.js" imgCaption="Node.js" imgType="icon" />
                  <ImageContainer imgSrc={AwsSamIcon} imgAlt="AWS SAM/Serverless" imgCaption="AWS SAM/Serverless" imgType="icon" />
                </Box>
              </section>

              <Typography variant="h6">Responsibilities</Typography>
              <Typography>
                <li>Backend development using AWS's Serverless Application Model (AWS SAM) and Spring Boot 2.</li>
                <li>Frontend development using React.js and Material UI.</li>
                <li>Architecting the system in a way that conforms to best practices and Monash University's cloud governance sturcture.</li>
                <li>Guided the implementation of the Open ID Connect protocol within the system for authentication and authorisation.</li>
                <li>Mentoring other developers, including assigning them suitable pieces of work and helping them where necessary.</li>
              </Typography> */}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Experience);