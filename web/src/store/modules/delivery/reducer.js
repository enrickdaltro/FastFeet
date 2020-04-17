import producer from 'immer';

const INITIAL_STATE = {
  delivery: null,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case '@delivery/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/EDIT_SUCCESS': {
        draft.delivery = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@delivery/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/UPDATE_SUCCESS': {
        draft.loading = false;
        draft.delivery = null;
        break;
      }
      default:
    }
  });
}
