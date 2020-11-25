import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Theme,
  Button,
  CardMedia,
  makeStyles,
  Box,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface BannerProps {
  imgSrc: string;
  title: string;
}

interface ExperienceProps {
  shortDescription: string;
  projectTitle: string;
  projectDuration: string;
  bannerProps?: BannerProps;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  baseExpansionClass: {
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: "auto",
  },
  expanded: {
    transform: "rotate(180deg)",
  },
  notExpanded: {
    transform: "rotate(0deg)",
  },
  cardContainer: {
    textAlign: "left",
    // marginRight: theme.spacing(2),
  },
  cardMedia: {
    height: 140,
    backgroundSize: "contain",
  },
}));

function Experience(props: ExperienceProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const classes = useStyles();
  const {
    bannerProps,
    children,
    projectTitle,
    projectDuration,
    shortDescription,
  } = props;
  return (
    <Card className={classes.cardContainer}>
      <CardHeader title={projectTitle} subheader={projectDuration} />
      {bannerProps && (
        <Box pl={2} pr={2}>
          <CardMedia
            className={classes.cardMedia}
            image={bannerProps.imgSrc}
            title={bannerProps.title}
          />
        </Box>
      )}
      <CardContent>
        <Typography>{shortDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          className={classes.baseExpansionClass}
        >
          <Typography>Read {isExpanded ? "less" : "more"}</Typography>
          <ExpandMoreIcon
            className={`${isExpanded ? classes.expanded : classes.notExpanded}`}
          />
        </Button>
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>{children}</CardContent>
      </Collapse>
    </Card>
  );
}

export default Experience;
