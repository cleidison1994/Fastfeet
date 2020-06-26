import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import {navigate} from '~/services/navigationServices';
import {
  startDeliverySuccess,
  deliveryAddProblemSuccess,
  deliveryFailure,
} from './actions';

export function* startDelivery({payload}) {
  try {
    const {delivery_id} = payload;

    const response = yield call(
      api.put,
      `/delivery/${delivery_id}/startdelivery`
    );
    if (response) {
      Alert.alert('Success', 'Entrega inicada com success!.');
      yield put(startDeliverySuccess());
      navigate('Dashboard');
    }
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu um problema, verifique o horario');
    yield put(deliveryFailure());
  }
}

export function* addDeliveryProblem({payload}) {
  try {
    const {id, description} = payload.delivery;

    if (description === '') {
      Alert.alert('Erro', 'Voçe deve informar um problema!.');
      yield put(deliveryFailure());
      return;
    }

    const response = yield call(api.post, `delivery/${id}/problems`, {
      description,
    });

    if (response) {
      yield put(deliveryAddProblemSuccess());
      navigate('Details');
    }
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu uma falha tente mais tarde');
    console.tron.log(error.message);
    yield put(deliveryFailure());
  }
}

export default all([
  takeLatest('@deliveryman/START_DELIVERY_REQUEST', startDelivery),
  takeLatest('@deliveryman/ADD_DELIVERY_PROBLEM_REQUEST', addDeliveryProblem),
]);
