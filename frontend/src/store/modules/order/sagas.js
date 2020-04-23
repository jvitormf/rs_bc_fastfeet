import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { findSuccess, findFailure } from './actions';

export function* find({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `orders/${id}`);

    const order = response.data;

    yield put(findSuccess(order));

    history.push('/order/edit');
  } catch (error) {
    toast.error('Falha ao carregar encomenda');
    yield put(findFailure());
  }
}

export default all([takeLatest('@order/FIND_REQUEST', find)]);
