export function createRecipientRequest(data) {
  return {
    type: '@recipient/CREATE_REQUEST',
    payload: { data },
  };
}

export function createRecipientSuccess() {
  return {
    type: '@recipient/CREATE_SUCCESS',
  };
}

export function createRecipientFailure() {
  return {
    type: '@recipient/CREATE_FAILURE',
  };
}

export function editRecipientRequest(id) {
  return {
    type: '@recipient/EDIT_REQUEST',
    payload: { id },
  };
}

export function editRecipientSuccess(recipient) {
  return {
    type: '@recipient/EDIT_SUCCESS',
    payload: { recipient },
  };
}

export function editRecipientFailure() {
  return {
    type: '@recipient/EDIT_FAILURE',
  };
}

export function updateRecipientRequest(data) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateRecipientSuccess() {
  return {
    type: '@recipient/UPDATE_SUCCESS',
  };
}

export function updateRecipientFailure() {
  return {
    type: '@recipient/UPDATE_FAILURE',
  };
}
