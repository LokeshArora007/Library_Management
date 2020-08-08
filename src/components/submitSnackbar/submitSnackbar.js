import React from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SubmitSnackbar = (props) => {
  const comonAction = useStoreActions((actions) => actions.comon);
  const comonState = useStoreState((state) => state.comon);

  const handleClose = (event, reason) => {
    comonAction.setSubmitSnackbar({
      status: false,
      messages: '',
      error: comonState.submitSnackbar.error,
    });
  };

  return (
    <>
      <Snackbar
        open={comonState.submitSnackbar.status}
        autoHideDuration={comonState.submitSnackbar.timeout}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={comonState.submitSnackbar.error ? 'error' : 'success'}
        >
          {comonState.submitSnackbar.messages}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SubmitSnackbar;
