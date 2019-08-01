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
  container: {
    margin: '11px',
    // display: 'block',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none',
  },
  icons: {
    height: '64px',
    width: '64px',
    margin: 'auto',
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
    let imgClass = '';
    switch (imgType) {
      case 'icon':
        imgClass = classes.icons;
        break;
      default:
        break; // default to using className
    }
    return (
      <div className={classes.container}>
        {isLoading && <CircularProgress />}
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`${className ? className : ''} ${imgClass} ${isLoading ? classes.hidden : ''}`}
          onLoad={this.onImgLoad.bind(this)}
        />
        {imgCaption && (<Typography variant="caption" style={{wordWrap: 'break-word'}}>{imgCaption}</Typography>)}
      </div>
    );
  }
}

export default withStyles(styles)(ImageContainer);