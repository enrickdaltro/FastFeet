import producer from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.deliveryman;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      case '@deliveryman/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/EDIT_SUCCESS': {
        draft.loading = false;
        draft.profile = action.payload.profile;
        break;
      }
      case '@deliveryman/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/UPDATE_SUCCESS': {
        draft.profile = null;
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
