import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import {
  editDeliverymanSuccess,
  editDeliverymanFailure,
  updateDeliverymanSuccess,
  updateDeliverymanFailure,
  createDeliverymanSuccess,
  createDeliverymanFailure,
} from './actions';

export function* editDeliveryman({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/deliveryman/${id}`);

    yield put(editDeliverymanSuccess(response.data));
  } catch ({ response }) {
    yield put(editDeliverymanFailure());
    console.tron.log(response.data.error);
  }
}

export function* updateDeliveryman({ payload }) {
  const { id, name, email, avatar_id } = payload.data;
  console.tron.log(payload.data);

  try {
    const response = yield call(api.put, `/deliveryman/${id}`, {
      name,
      email,
      avatar_id,
    });
    console.tron.log(response.data);

    yield put(updateDeliverymanSuccess(response.data));

    Alert.alert('Sucesso', 'Entregador atualizado!');
  } catch ({ response }) {
    yield put(updateDeliverymanFailure());
    console.tron.log(response.data.error);
  }
}

export function* createDeliveryman({ payload }) {
  const { id, name, email, avatar_id } = payload.data;

  try {
    yield call(api.post, '/deliveryman', {
      id,
      name,
      email,
      avatar_id,
    });

    yield put(createDeliverymanSuccess());
  } catch ({ response }) {
    yield put(createDeliverymanFailure());
    console.tron.log(response.data.error);
  }
}

export default all([
  takeLatest('@deliveryman/EDIT_REQUEST', editDeliveryman),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliveryman),
  takeLatest('@deliveryman/CREATE_REQUEST', createDeliveryman),
]);
