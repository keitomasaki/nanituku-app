import React, { useContext } from 'react';
import { makeStyles, Snackbar, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { SnackBarContext } from './contexts/SnackBarContextProvider';

const useStyles = makeStyles({});

const SnackBar = (props) => {
  const { message, isOpen, closeSnackBar } = useContext(SnackBarContext);
  const classes = useStyles();
  const { children } = props;

  const action = (
    <React.Fragment>
      <IconButton size='small' color='inherit' onClick={closeSnackBar}>
        <HighlightOffIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isOpen}
          autoHideDuration={6000}
          onClose={closeSnackBar}
          message={message}
          action={action}
        />
      </div>
      {children}
    </div>
  );
};

export default SnackBar;
