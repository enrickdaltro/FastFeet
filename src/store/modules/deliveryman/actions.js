export function editDeliverymanRequest(id) {
  return {
    type: '@deliveryman/EDIT_REQUEST',
    payload: { id },
  };
}

export function editDeliverymanSuccess(profile) {
  return {
    type: '@deliveryman/EDIT_SUCCESS',
    payload: { profile },
  };
}

export function editDeliverymanFailure() {
  return {
    type: '@deliveryman/EDIT_FAILURE',
  };
}

export function updateDeliverymanRequest(data) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateDeliverymanSuccess() {
  return {
    type: '@deliveryman/UPDATE_SUCCESS',
  };
}

export function updateDeliverymanFailure() {
  return {
    type: '@deliveryman/UPDATE_FAILURE',
  };
}

export function createDeliverymanRequest(data) {
  return {
    type: '@deliveryman/CREATE_REQUEST',
    payload: { data },
  };
}

export function createDeliverymanSuccess() {
  return {
    type: '@deliveryman/CREATE_UPDATE',
  };
}

export function createDeliverymanFailure() {
  return {
    type: '@deliveryman/CREATE_FAILURE',
  };
}
