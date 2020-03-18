import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    if (user.provider === 'true') {
      Alert.alert('Erro no login', 'O usuário não pode ser prestador');
      return;
    }

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados.');

    yield put(signFailure());
  }
}

export function signOut() {}

export function setToken({ payload }) {
  if (payload) {
    const { token } = payload.auth;

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
