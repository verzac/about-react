import { Theme, withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from 'react';

const styles = (theme: Theme) => createStyles({
  section: {
    marginBottom: theme.spacing(2),
  }
});

const PageSection: React.FC<WithStyles<typeof styles>> = (props) => {
  return (<div className={props.classes.section}>{props.children}</div>);
}

export default withStyles(styles)(PageSection);