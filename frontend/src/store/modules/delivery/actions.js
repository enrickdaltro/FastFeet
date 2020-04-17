export function editDeliveryRequest(id) {
  return {
    type: '@delivery/EDIT_REQUEST',
    payload: { id },
  };
}

export function editDeliverySuccess(data) {
  return {
    type: '@delivery/EDIT_SUCCESS',
    payload: { data },
  };
}

export function editDeliveryFailure() {
  return {
    type: '@delivery/EDIT_FAILURE',
  };
}

export function updateDeliveryRequest(id, data) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: { id, data },
  };
}

export function updateDeliverySuccess() {
  return {
    type: '@delivery/UPDATE_SUCCESS',
  };
}

export function updateDeliveryFailure() {
  return {
    type: '@delivery/UPDATE_FAILURE',
  };
}
