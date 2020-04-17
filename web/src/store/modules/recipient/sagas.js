import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  createRecipientSuccess,
  createRecipientFailure,
  editRecipientFailure,
  editRecipientSuccess,
  updateRecipientFailure,
  updateRecipientSuccess,
} from './actions';

import history from '../../../services/history';

export function* editRecipient({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/recipients/${id}`);

    yield put(editRecipientSuccess(response.data));

    history.push('/destinatarios_edicao');
  } catch ({ response }) {
    yield put(editRecipientFailure());
    console.tron.log(response.data.error);
    toast.error(response.data.error);
  }
}

export function* updateRecipient({ payload }) {
  const {
    id,
    name,
    street,
    number,
    complement,
    state,
    cit,
    zipcode,
  } = payload.data;

  try {
    yield call(api.put, `/recipients/${id}`, {
      name,
      street,
      number,
      complement,
      state,
      cit,
      zipcode,
    });

    yield put(updateRecipientSuccess());

    toast.success('Entregador atualizado!');

    history.push('/destinatarios');
  } catch ({ response }) {
    yield put(updateRecipientFailure());
    console.tron.log(response.data.error);
  }
}

export function* createRecipient({ payload }) {
  const {
    id,
    name,
    street,
    number,
    complement,
    state,
    city,
    zipcode,
  } = payload.data;

  try {
    yield call(api.post, '/recipients', {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      zipcode,
    });

    yield put(createRecipientSuccess());

    toast.success('Destinatário adicionado!');

    history.push('/destinatarios');
  } catch ({ response }) {
    yield put(createRecipientFailure());
    console.tron.log(response.data.error);
    toast.error(response.data.error);
  }
}

export default all([
  takeLatest('@recipient/EDIT_REQUEST', editRecipient),
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipient/CREATE_REQUEST', createRecipient),
]);
