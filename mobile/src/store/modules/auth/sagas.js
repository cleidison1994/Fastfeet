import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {SignInSuccess, SignInFaiulure, LogoutSuccess} from './actions';

export function* DeliverymanSignIn({payload}) {
  try {
    const {deliveryman_id} = payload;
    if (!deliveryman_id) {
      yield put(SignInFaiulure());
      Alert.alert('Erro', 'campo vazio.');
      return;
    }
    const response = yield call(api.get, `/deliveryman/${deliveryman_id}/me`);

    yield put(SignInSuccess(response.data));
  } catch (error) {
    yield put(SignInFaiulure());
    Alert.alert('Falha', 'verifique seu id');
  }
}

export function* DeliverymanLogout() {
  try {
    yield put(LogoutSuccess());
  } catch (error) {
    yield Alert.alert('Erro', 'Falha ao sair da aplicação');
  }
}

export default all([
  takeLatest('@auth/DELIVERYMAN_SIGNIN_REQUEST', DeliverymanSignIn),
  takeLatest('@auth/DELIVERYMAN_LOGOUT_REQUEST', DeliverymanLogout),
]);
