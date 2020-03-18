import producer from 'immer';

const INITIAL_STATE = {
  loading: false,
  recipient: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case '@recipient/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/CREATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@recipient/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/EDIT_SUCCESS': {
        draft.loading = false;
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/UPDATE_SUCCESS': {
        draft.loading = false;
        draft.recipient = null;
        break;
      }
      default:
    }
  });
}
