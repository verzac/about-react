import React from 'react';
import { CircularProgress, createStyles, withStyles, WithStyles, Typography, Box } from '@material-ui/core';

interface ImageContainerProps {
  imgSrc: string;
  imgAlt: string;
  className?: string;
  imgCaption?: string;
  imgType?: 'icon'; // we'll add more later as we need but right now we don't need more
}

interface ImageContainerState {
  isLoading: boolean;
}

const styles = createStyles({
  hidden: {
    display: 'none',
  },
  icons: {
    height: '64px',
    width: '64px',
    margin: '11px',
  },
});

class ImageContainer extends React.Component<ImageContainerProps & WithStyles<typeof styles>, ImageContainerState> {
  state = {
    isLoading: true,
  };

  onImgLoad = () => {
    this.setState({ isLoading: false });
  }

  render() {
    const { className, classes, imgSrc, imgAlt, imgCaption, imgType } = this.props;
    const { isLoading } = this.state;
    let containerClass = undefined;
    switch (imgType) {
      case 'icon':
        containerClass = classes.icons;
        break;
      default:
        break; // default to using className
    }
    return (
      <Box display="block" className={containerClass}>
        {isLoading && <CircularProgress />}
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`${className} ${isLoading ? classes.hidden : undefined}`}
          onLoad={this.onImgLoad.bind(this)}
        />
        {imgCaption && (<Typography variant="caption">{imgCaption}</Typography>)}
      </Box>
    );
  }
}

export default withStyles(styles)(ImageContainer);