import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  editDeliverySuccess,
  editDeliveryFailure,
  updateDeliverySuccess,
  updateDeliveryFailure,
} from './actions';

import api from '../../../services/api';

export function* editDelivery({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/delivery/${id}`);
    console.tron.log(response.data);

    yield put(editDeliverySuccess(response.data));
  } catch ({ response }) {
    yield put(editDeliveryFailure());
    console.tron.log(response.data.error);
  }
}

export function* updateDelivery({ payload }) {
  const { id, data } = payload;
  console.tron.log(id, data);

  try {
    yield call(api.put, `/delivery/${id}`, data);

    yield put(updateDeliverySuccess());
  } catch ({ response }) {
    yield put(updateDeliveryFailure());
    console.tron.log(response.data.error);
  }
}

export default all([
  takeLatest('@delivery/EDIT_REQUEST', editDelivery),
  takeLatest('@delivery/UPDATE_REQUEST', updateDelivery),
]);
