import { action, thunk } from 'easy-peasy';
import * as comonService from '../../services/comon';

const comonModel = {
  submitSnackbar: {
    status: false,
    messages: '',
    error: false,
    timeout: 2000,
  },
  setSubmitSnackbar: action((state, payload) => {
    if (!payload.timeout) {
      payload.timeout = 2000;
    }
    state.submitSnackbar = payload;
  })  
};

export default comonModel;
